let calculator = {
  read(a, b){
    this.firstTerm = a;
    this.secondTerm = b;
  },
  sum(){
    let summary = this.firstTerm + this.secondTerm;
    return summary;
  },
  mul(){
    let multiple = this.firstTerm * this.secondTerm;
    return multiple;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
