$(document).ready(function(){
    //ajax request for retriving data
    function showdata(){
        output="";
        $.ajax({
            url:"retrieve.php",
            method:"GET",
            dataType:"json",
            success:function(data){
                // console.log(data[0].name);
                if(data){
                    x=data;

                }else{
                    x="";
                }
                for(i=0;i<x.length;i++){
                    // console.log(x[i].name);
                    output+="<tr><td>" + x[i].id + "</td><td>" +
                    x[i].name + "</td><td>" +
                    x[i].email+"</td><td>"+
                    x[i].password +
                    "</td><td><button class='btn btn-warning btn-sm btn-edit'  data-sid="+x[i].id+">Edit</button><button class='btn btn-danger btn-sm btn-del'  data-sid="+x[i].id+">Delete</button>" + "</td></tr>";
                }
                $("#tbody").html(output);
            }

    
        })
    }
    showdata();
//ajax request for insert data
$("#btnadd").click(function(e){
e.preventDefault();
console.log("Button click");
let stid=$("#stuid").val();

let nm=$("#nameid").val();
let em=$("#emailid").val();
let pw=$("#passwordid").val();
// console.log(nm);
// console.log(em);
// console.log(pw);
mydata={id:stid,name:nm, email:em, password:pw};
// console.log(mydata);
$.ajax({
    url:"insert.php",
    method:"post",
    data:JSON.stringify(mydata),
    success: function(data){
        // console.log(data);
        msg="<div class='alert alert-dark mt-3 role='alert'>"+data+"</div>";
        $("#msg").html(msg);
        $("#myform")[0].reset();
        showdata();
    },

});


});
//ajax request for deleting data
$("tbody").on("click",".btn-del", function(){
    console.log("delete button click");
    let id=$(this).attr("data-sid");
    // console.log(id);
    mydata={sid:id};
    mythis=this;
    $.ajax({
        url:"delete.php",
        method:"POST",
        data:JSON.stringify(mydata),
        success:function(data){
            console.log(data);
            msg1="<div class='alert alert-dark mt-3 role='alert'>"+data+"</div>";
            $("#msg1").html(msg1);
            showdata();
            // $(this).closest("tr").fadeOut();
        },
    })
});
//ajax request for editing data
$("tbody").on("click",".btn-edit", function(){
    console.log("edit button click");
    let id=$(this).attr("data-sid");
    // console.log(id);
   
    mydata={sid:id};
    $.ajax({
        url:"edit.php",
        method:"POST",
        dataType:"json",
        data:JSON.stringify(mydata),
        success:function(data){
            console.log(data.id);
            $("#stuid").val(data.id);

            $("#nameid").val(data.name);
            $("#emailid").val(data.email);
            $("#passwordid").val(data.password);
        }
    })

});

});

