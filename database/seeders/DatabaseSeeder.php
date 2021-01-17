<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i=0;$i<5;$i++){
            $u=User::create([
                'email'=> $faker->email,
                'name'=>$faker->name,
                'password'=>Hash::make($faker->word)
            ]);
            for ($j=0;$j<rand(3,9);$j++) {
                $p = $u->projects()->create([
                    'name' => $faker->word,
                    'image'=>$faker->image('public/images',640,400,null,false)
                ]);
                for ($x = 0; $x < rand(4,10); $x++) {
                    $due_date=[null,null,null,$faker->date()];
                    $p->tasks()->create([
                        'title' => $faker->text,
                        'due_date' => $due_date[rand(0,3)]
                    ]);


                }
            }
        }
        $u=User::find(1);
        $u->email='test@test.com';
        $u->password=Hash::make('test');
        $u->save();
    }
}
