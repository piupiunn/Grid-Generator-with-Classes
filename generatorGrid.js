class Grid {
  //row ve column özellikleri
  constructor(rowsGridNumber, columnsGridNumber) {
    this.rowsGridNumber = parseInt(document.querySelector(".rows-grid").value);
    this.columnsGridNumber = parseInt(
      document.querySelector(".columns-grid").value
    );
  }
  //Oluşturulan class'tan nesne üretmeye gerek kalmadan oluşturduğumuz metodu kullanabilmek için, metodu static olarak ekledim.
  static createGrid() {
    //Grid'in çizileceği container'ı seçmek. Kutular burda dizilecek.
    const container = document.getElementById("container");
    //Sayfa yenilenmeden ikinci bir table oluşturulmak istenirse, önceki table'ın üstüne yazmaması için fonksiyon her çalıştığında ilk başta boş değer üzerinden ilerliyor.
    container.innerHTML = "";
    //Row inputunu tam sayıyla almak
    this.rowsGridNumber = parseInt(document.querySelector(".rows-grid").value);
    //Grid inputunu tam sayıyla almak
    this.columnsGridNumber = parseInt(
      document.querySelector(".columns-grid").value
    );

    //Grid'in çizileceği container'a setProperty ile kaç tane kutu olacağını iletmek. İlk değer css üzerinden custom oluşturduğumuz ve 1 atadığımız değer. İkinci değer ise inputtan gelen değer. setProperty ile oluşturduğumuz css değerini inputtan gelecek olan değere eştliyoruz.
    container.style.setProperty("--grid-rows", this.rowsGridNumber);
    container.style.setProperty("--grid-cols", this.columnsGridNumber);

    //Input değerine girilen sayılar kadar grid çizilmesi için input değerlerini çarpıp çıkan sonuca kadar dönüyoruz.
    for (let c = 0; c < this.rowsGridNumber * this.columnsGridNumber; c++) {
      //Gridlerimizi div ile oluşturmak için div oluşturuyoruz.
      let cell = document.createElement("div");
      //Oluşturduğumuz divlerin içine kaçıncı div olduğunu yazmak
      cell.innerText = c + 1;
      //Grid'ın gösterilmesi için yukarda seçtiğimiz container'a, oluşturduğumuz divleri eklemek ve classlarını css'imizde ki "grid-item" yapmak.
      container.appendChild(cell).className = "grid-item";
    }
  }
}
//Metodumuzu çalıştırmak için eventlistener ataması yapmak. Static metod olduğu için direkt class üzerinden çağırılabilir.
document.querySelector(".button-grid-maker").addEventListener("click", () => {
  Grid.createGrid();
  console.log((b = new Grid()));
});
