$(document).ready(function(){
  $('button').click(function(){
    const name=$('#name').val();
    alert(name);
    $('#imgsrc').attr("src",'https://joeschmoe.io/api/v1/male/${name}');
  });
});
