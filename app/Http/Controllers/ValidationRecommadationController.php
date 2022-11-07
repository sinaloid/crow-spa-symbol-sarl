<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\ValidationRecommandation;
use App\Models\Projet;


class ValidationRecommadationController extends Controller
{
    public function __construct()
    {
        $this->middleware(['api.can.edite'],['except' => ['index', 'show']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){

        try {
            $datas = ValidationRecommandation::orderBy('created_at', 'DESC')->get();
            $prod = Projet::orderBy('created_at', 'DESC')->get(["libelle","slug"]);
            $tmp = [];
            //dd($datas);
            foreach($datas as $data){
                array_push($tmp,[
                    "id" => $data->id,
                    "projet_id" => $data->projet_id,
                    "projet_nom" => $data->projet->libelle,
                    "projet_slug" => $data->projet->slug,
                    "type" => $data->type,
                ]);
            }
            return response()->json([
                'status' => 200,
                'vr' => $tmp,
                'product' => $prod
            ]);
         }catch (Exception $exception){
             return response()->json([
                 'status' => 404,
                 'response' => 'Un problème vous empêche de continuer'
             ]);
         }
    }

    

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //$request['slug'] = $this->generateRandomString();
        $request['projet_id'] = Projet::where('slug', $request['projet_slug'])->first();
        if(!isset($request['projet_id'])){
            return response()->json([
                'status' => 404,
                'response' => "Un problème vous empêche de continuer: le produit n'exist pas"
            ]);
        }
        $produitUserId = $request['projet_id']->user->id;
        

        $request['projet_id'] = $request['projet_id']->id;

        $validator = Validator::make($request->all(), $this->dataToValidate());
        if ($validator->fails()) {
            $message = $validator->messages();
            $message = reset($message);
            $message = reset($message);
            return response()->json([
                'status' => 900,
                'response' => $message[0]
            ]);
        } else {

            try {
                
                if(Auth::user()->type >= 1 && Auth::user()->id == $produitUserId){
                    $data = ValidationRecommandation::create($request->toArray());
                    return response()->json([
                        'status' => 200,
                        'response' => 'Création de données réussies'
                    ]);
                }
                return response()->json([
                    'status' => 404,
                    'response' => 'Permission Refuser'
                ]);
                

            }catch (Exception $exception){
                return response()->json([
                    'status' => 404,
                    'response' => 'Un problème vous empêche de continuer'
                ]);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        try {
            $data = Reduction::where('id',$slug)->get();
            if(isset($data)){
                return response()->json([
                    'status' => 200,
                    'response' => $data
                ]);
            }
            return response()->json([
                'status' => 404,
                'response' => 'Donnée inexistante'
            ]);
        }catch (Exception $exception){
            return response()->json([
                'status' => 404,
                'response' => 'Un problème vous empêche de continuer'
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $request['projet_id'] = Projet::where('slug', $request['projet_slug'])->first();
        if(!isset($request['projet_id'])){
            return response()->json([
                'status' => 404,
                'response' => "Un problème vous empêche de continuer: le produit n'exist pas"
            ]);
        }
        $produitUserId = $request['projet_id']->user->id;
        

        $request['projet_id'] = $request['projet_id']->id;
        
        $validator = Validator::make($request->all(), $this->dataToValidate("update"));
        if ($validator->fails()) {
            $message = $validator->messages();
            $message = reset($message);
            $message = reset($message);
            return response()->json([
                'status' => 900,
                'response' => $message[0]
            ]);
        } else {
            try {
                $data = ValidationRecommandation::where('id',$slug)->first();
                if(isset($data) && Auth::user()->type >= 1 && Auth::user()->id == $produitUserId){
                    $data->type = $request->get('type');
                    $data->projet_id = $request->get('projet_id');
                    $data->update();
                    return response()->json([
                        'status' => 200,
                        'response' => 'Modification de données réussies'
                    ]);
                }
                return response()->json([
                    'status' => 404,
                    'response' => 'Donnée inexistante ou problème de droit'
                ]);

            }catch (Exception $exception){
                return response()->json([
                    'status' => 404,
                    'response' => 'Un problème vous empêche de continuer'
                ]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        try {
            $data = ValidationRecommandation::where('id',$slug);
            $tmp = $data->first();
            if(isset($tmp) &&  (Auth::id() == $tmp->user_id || Auth::user()->type == 2)){
                $data->delete();
                return response()->json([
                    'status' => 200,
                    'response' => 'Suppression de données réussies'
                ]);
            }
            return response()->json([
                'status' => 404,
                'response' => isset($tmp) ? 'Permission Refuser' : 'Donnée inexistante'
            ]);
        }catch (Exception $exception){
            return response()->json([
                'status' => 404,
                'response' => 'Un problème vous empêche de continuer'
            ]);
        }
    }

    public function dataToValidate($type = ""){
        if($type == "update"){
            return [
                'type' => 'required|string|max:255',
                'projet_id' => 'required|integer',
            ];
        }
        return [
            'type' => 'required|string|max:255',
            'projet_id' => 'required|integer|unique:validation_recommandations',
        ];
    }
}