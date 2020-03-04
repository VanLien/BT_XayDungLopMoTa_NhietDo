let Convert =function (convertC,) {
    this.convertC=convertC;
    this.getConverC=function () {
        return this.convertC;
    };
    this.setConvertC=function () {
        this.convertC=convertC;
    };
    this.getConverF=function () {
        return (9/5*convertC)+32;
    };
    this.getConverK=function () {
        return convertC+273.15;
    };
};
function convert() {
    let input = document.getElementById("number").value;
    if (input<-50 ||input>50){
        alert("Nhập Lại Giá Trị ");
    } else {
        let convert = new Convert(input);
        let convertC = convert.getConverC();
        let converF = convert.getConverF();
        let convertK = convert.getConverK();
        document.getElementById("Result").innerHTML =
            "Nhiệt Độ C : " + convertC + "<br>" +
            "Nhiệt Độ F:" + converF + "<br>" +
            "Nhiệt Độ K : " + convertK;
    }
}
