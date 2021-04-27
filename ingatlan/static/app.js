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
    if ($("#haz").val()=="" || $("#meret").val()=="" || $("#iszam").val()=="" 
    || $("#telep").val()=="" || $("#utca").val()=="" || $("#hazszam").val()=="" || ($("#ár1").val()=="" && $("#ár2").val()=="") || ($("#ár1").val()=="0" && $("#ár2").val()=="0")
    || $("#szoba").val()=="" || $("#erkely").val()=="" || $("#email").val()=="" || $("#telefon").val()=="" || $("#elerheto").val()=="")
    {
        alert("Valamelyik mező üresen maradt")
        return 0;
    }
   
}
function Calculator(){
    var meret  = $("#meret").val();
    var ár1  = $("#ár1").val();
    var ár2  = $("#ár2").val();
    if (ár2>999)
    {
        let temp = ár2.substring(0,3);
        $("#ár2").val(temp);
    }
    if (ár1>999)
    {
        let temp = ár1.substring(0,3);
        $("#ár1").val(temp);
    }
    if (ár2<0)
    {
        $("#ár2").val('0');
    }
    if (ár1<0)
    {
        $("#ár1").val('0');
    }
    if (ár2[0] == 0)
    {
        let temp = ár2.split('0').length-1
        let temp2 = ár2.length;
        if (temp>1 || temp2>1)
            $("#ár2").val('0');
    }
    if (ár1[0] == 0)
    {
        let temp = ár1.split('0').length-1
        let temp2 = ár1.length;
        if (temp>1 || temp2>1)
            $("#ár1").val('0');
    }

    var ár1  = $("#ár1").val();
    var ár2  = $("#ár2").val();
    if (meret !="" && (ár1 != "" && ár1 != "0"|| ár2 != "" && ár2 != "0"))
    {            
        var árm2 = (Math.floor((ár1*1000000 + ár2 * 1000)/meret));
        árm3 = árm2 +0;
        if (árm3>=1000000)
            árm3 = Math.floor(árm3/1000000) +" Millió "
        else
        árm3 = "";
        if (árm2>=1000000)
        {
            while (árm2>=1000000)
                árm2 = árm2-1000000;
            if (árm2 =="0")
                árm2 =""
            
        }
        if (árm2>=1000)
        {
            árm2 = Math.floor(árm2/1000) + " Ezer"

        }
        else if (árm2 !="")
            árm2 = árm2 + " Ezer"
        let final = árm3 + "" + árm2 + " /  m²";
        $("#calc").text(String(final));
        $("#m2ar").text(String(final));
    }
    if (ár1 =="0" && ár2=="0")
    {
        $("#calc").text("");
        $("#m2ar").text("");
    }
}