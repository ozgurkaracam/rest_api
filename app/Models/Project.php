<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable=['user_id','name'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function getImagePathAttribute()
    {
        if(!$this->image!='')
            return asset('images').'/1610542891.jpeg';
        return asset('images').'/'.$this->image;
    }

    public function getCreatedAttribute(){
        return $this->created_at->diffForHumans();
    }
}
