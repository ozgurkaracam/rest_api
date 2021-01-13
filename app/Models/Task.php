<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $fillable=['project_id','due_date','title'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function getPriorityAttribute()
    {
        return !is_null($this->due_date) ? 'High' : 'Low';
    }
}
