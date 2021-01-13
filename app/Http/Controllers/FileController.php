<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileRequest;
use App\Models\Project;
use Illuminate\Http\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function store(FileRequest $request)
    {
        $image=$request->file('image');
        $imageName=time().".".$image->getClientOriginalExtension();
        $image->move('images',$imageName);
        $project=Project::findOrFail($request->get('project_id'));
        if($project->image!='')
            \Illuminate\Support\Facades\File::delete('/images/s/'.$project->image);
        $project->image=$imageName;
        $project->save();
        return response($imageName);
    }
}
