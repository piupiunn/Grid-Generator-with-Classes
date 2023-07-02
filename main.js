class Table {
  //table, row ve colum özellikleri
  constructor(tableSelector, rowsSelector, columnsSelector) {
    this.rowsSelector = rowsSelector;
    this.columnsSelector = columnsSelector;
    this.tableObj = tableSelector;
  }

  //Oluşturulan class'tan nesne üretmeye gerek kalmadan oluşturduğumuz metodu kullanabilmek için, metodu static olarak ekledim.
  static generate = () => {
    let tableHTML = "";

    //row ve colum inputlarının değerlerini seçmek ve parseInt'le eğer ondalıklı sayı girilirse tam sayıya çevirmek.
    const rowsNumber = parseInt(document.querySelector(".rows").value);
    const columnsNumber = parseInt(document.querySelector(".columns").value);

    //Row inputuna girilen değere kadar dönmek
    for (let r = 1; r <= rowsNumber; r++) {
      let tr = "<tr>";

      //Column inputuna girilen değere kadar dönmek. Row'la içiçeler ki senkronize şekilde iki farklı input değerine göre kutular oluşsun.
      for (let c = 1; c <= columnsNumber; c++) {
        //Hem toplam kutu sayısını vermek, hemde kutulara kendi sayılarını vermek için, r ve c değerlerini input değerlerine kadar çarpmak. Örneğin ilk satır 1*1 1*2 1*3, ikinci satır 2*1 2*2 2*3 gibi.
        const cellContent = r * c;
        let td = `<td>${cellContent}${`<input/>`}</td>`;
        //Table içini doldurmak
        tr += td;
      }
      //Yukarda boş olarak oluşturulan tableHTML, artık oluşturulan değerleri sürekli üstüne koyarak table'ı oluşturuyor.
      tableHTML += tr;
    }
    //İnput değerine göre oluşacak olan table'ın gözükmesi için table komponentinin innerHTML'ini tableHTML değerimize eşitliyoruz.
    document.querySelector(".table").innerHTML = tableHTML;
  };
}

//Metodumuzu çalıştırmak için eventlistener ataması yapmak. Static metod olduğu için direkt class üzerinden çağırılabilir.
document.querySelector(".button").addEventListener("click", () => {
  Table.generate();
});
