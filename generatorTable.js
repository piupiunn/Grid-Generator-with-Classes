class Table {
  // row ve column özellikleri
  constructor(rowsNumber, columnsNumber) {
    this.rowsNumber = parseInt(document.querySelector(".rows").value);
    this.columnsNumber = parseInt(document.querySelector(".columns").value);
  }

  //Oluşturulan class'tan nesne üretmeye gerek kalmadan oluşturduğumuz metodu kullanabilmek için, metodu static olarak ekledim.
  static generateTable = () => {
    //Sayfa yenilenmeden ikinci bir table oluşturulmak istenirse, önceki table'ın üstüne yazmaması için fonksiyon her çalıştığında ilk başta boş değer üzerinden ilerliyor.
    let tableHTML = "";

    //row ve colum inputlarının değerlerini seçmek ve parseInt'le eğer ondalıklı sayı girilirse tam sayıya çevirmek.
    this.rowsNumber = parseInt(document.querySelector(".rows").value);
    this.columnsNumber = parseInt(document.querySelector(".columns").value);

    //Row inputuna girilen değere kadar dönmek
    for (let r = 1; r <= this.rowsNumber; r++) {
      let tr = "<tr>";

      //Column inputuna girilen değere kadar dönmek. Row'la içiçeler ki senkronize şekilde iki farklı input değerine göre kutular oluşsun.
      for (let c = 1; c <= this.columnsNumber; c++) {
        //Hem toplam kutu sayısına ulaşmak, hemde kutulara kendi sayılarını vermek için, r ve c değerlerini input değerlerine kadar çarpmak. Örneğin ilk satır 1*1 1*2 1*3, ikinci satır 2*1 2*2 2*3 gibi.
        const cellContent = r * c;
        let td = `<td>${cellContent}</td>`;
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
document
  .querySelector(".button-table-generator")
  .addEventListener("click", () => {
    Table.generateTable();
    console.log((a = new Table()));
  });
