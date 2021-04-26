function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width('100%');
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function feladas(){
    if ($("#haz").val().replaceAll(" ","")=="" || $("#meret").val().replaceAll(" ","")=="" || $("#iszam").val().replaceAll(" ","")=="" 
    || $("#telep").val().replaceAll(" ","")=="" || $("#utca").val().replaceAll(" ","")=="" || $("#hazszam").val().replaceAll(" ","")=="" || $("#ár1").val().replaceAll(" ","")=="" || $("#ár2").val().replaceAll(" ","")=="" 
    || $("#szoba").val().replaceAll(" ","")=="" || $("#erkely").val().replaceAll(" ","")=="" || $("#email").val().replaceAll(" ","")=="" || $("#telefon").val().replaceAll(" ","")=="" || $("#elerheto").val().replaceAll(" ","")==""
    || $("#choose").val().replaceAll(" ","")=="")
    {
        alert("Valamelyik mező üresen maradt")
        return 0;
    }
    alert("Ingatlan sikeresen feladva")
}