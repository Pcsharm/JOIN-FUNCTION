name_of_the_student_array=[];

function submit()
{
    var display_student_array=[];
    for ( var j=1; j<=4;j++)
    {
        var name_of_the_student=document.getElementById("name_of_the_student_1").value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
    console.log(name_of_the_student_array);
    var length_of_name_of_the_students_array=length_of_name_of_the_students_array.length;
    console.log(length_of_name_of_the_students_array);
    for (var k=0; k<length_of_name_of_the_students_array;k++);
    {
        display_student_array.push("<h4>name -"+ name_of_the_student_array[k]+ "</h4>");
        console.log(display_students_array);
    }
    console.log(display_students_array);
    document.getElementById("display_name_with_commas").innerHTML=display_students_array;

    var remove_commas=display_student_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;


    document.getElementByid("submit_button").style.display="none";
    document.getElementByid("sort_button").style.display="inline-block";
}
function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting=[];

    var length_of_name_of_the_students_array=length_of_name_of_the_students_array.length;
    console.log(length_of_name_of_the_students_array);
    
    for (var k=0; k<length_of_name_of_the_students_array;k++);
    {
        display_student_array_sorting("<h4>name -"+ name_of_the_student_array[k]+ "</h4>");
        console.log(display_students_array_sorting);
    } 
    var remove_commas=display_student_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
