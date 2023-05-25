//////////////////////////////////////////// PROMPT DU PRENOM //////////////////////////////////////////////

document.getElementById("username-prompt-script").addEventListener("click", function(){
  let userName = prompt("Quel est ton prénom ?");

  while(true)
  {
    while(userName.length==0)
    {
      alert("Merci de remplir ce champ !");
      userName = prompt("Quel est ton prénom ?");
    }
  
    while(userName.length>15)
    {
      alert("Trop long ! 15 caractères maximum !");
      userName = prompt("Quel est ton prénom ?");
    }

    if (userName.length>0 && userName.length<=15)
    {
      break;
    }
  }
  console.log(`Salut ${userName} !`);
  document.getElementById('username').innerHTML = "<h3> Bonjour </h3> "+userName;
});

////////////////////////////////////////////// FACTORISATION //////////////////////////////////////////////

document.getElementById("factor-prompt-script").addEventListener("click", function(){
  let number = prompt("Quel chiffre ou nombre souhaitez-vous factoriser ?");
  let str_result = "";
  let int_result = 0;
  
  for (let i = number ; i > 0 ; i--)
  {
    int_result+= (i*i-1);
    let adder;
    (i>1) ? adder = "*" : adder = ""; 
    str_result+= i.toString() + adder;
  }
  
  str_result+= " = " +int_result.toString();
  console.log(`${int_result}`);
  document.getElementById('factor').innerHTML = str_result;
});

////////////////////////////////////////////// PYRAMIDE //////////////////////////////////////////////

document.getElementById("pyramid-prompt-script").addEventListener("click", function(){
  let stages = prompt("Combien d'étages pour la pyramide ?");
  let pyramid_to_html = "";
  
  for (let x = 0 ; x < stages ; x++)
  {
    console.log(" ".repeat(stages-x) + "#".repeat(x+1));
    pyramid_to_html += ("&ensp;".repeat(stages-x) + "#".repeat(x+1))+"<br>";
  }
  
  document.getElementById('pyramid').innerHTML = pyramid_to_html;
});

////////////////////////////////////////////// MANIPULATION DES TABLEAUX //////////////////////////////////////////////

////////////////////////////////////////////// ENTREPRENEURS //////////////////////////////////////////////
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let str_born_in_seventies = "";
let str_all_business_people = "";
let str_people_age_today = "";
let str_people_sorted = "";

function getBetweenYears(yearMin, yearMax, year)
{
  return (year >= yearMin && year <= yearMax) ? true : false;
}

function getTodayAge(age)
{
  current_year = new Date().getFullYear();
  return current_year - age;
}

for (let e = 0 ; e < entrepreneurs.length ;e++)
{
  console.log(entrepreneurs[e].first + " " + entrepreneurs[e].last);
  str_all_business_people += (entrepreneurs[e].first + " " + entrepreneurs[e].last + "<br>");

  if (getBetweenYears(1970,1979, entrepreneurs[e].year))
  {
    console.log(entrepreneurs[e].first + " " + entrepreneurs[e].last + " né(e) en " + entrepreneurs[e].year);
    str_born_in_seventies += (entrepreneurs[e].first + " " + entrepreneurs[e].last + " né(e) en " + entrepreneurs[e].year + "<br>");
  }

  console.log(entrepreneurs[e].first + " " + entrepreneurs[e].last + " a aujourd'hui "+getTodayAge(entrepreneurs[e].year) + " ans.");
  str_people_age_today += (entrepreneurs[e].first + " " + entrepreneurs[e].last + " a aujourd'hui "+getTodayAge(entrepreneurs[e].year) + " ans."+"<br>");
}

entrepreneurs.sort(function(a,b){return a.last < b.last ? -1 : 1});

for (let e = 0 ; e < entrepreneurs.length ;e++)
{
  console.log(entrepreneurs[e].first + " " + entrepreneurs[e].last);
  str_people_sorted+= (entrepreneurs[e].first + " " + entrepreneurs[e].last + "<br>");
}

document.getElementById("seventies").innerHTML = str_born_in_seventies;
document.getElementById("business-peoples").innerHTML = str_all_business_people;
document.getElementById("age-today").innerHTML = str_people_age_today;
document.getElementById("peoples-sorted").innerHTML = str_people_sorted;

////////////////////////////////////////////// BIBLIOTHECAIRE //////////////////////////////////////////////


const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let str_all_rented = "";

function allBooksRented()
{
  for (let b = 0 ; b < books.length ; b++)
  {
    if (books[b].rented<=0) return false;
  }
  return true;
}

function mostRentedBook()
{
  let most_rented = books.reduce((p, c) => {return c.rented > p.rented ? c : p });
  console.log(most_rented);
  return most_rented.title;
}

function lessRentedBook()
{
  let less_rented = books.reduce((p, c) => {return c.rented < p.rented ? c : p });
  console.log(less_rented);
  return less_rented.title;
}

function findBookById(id)
{
  for (let i = 0 ; i < books.length ; i++)
  {
    if (books[i].id == id) { return books[i].title; }
  }
  return "Aucun."
}

function removeBookById(id)
{
  for (let i = 0 ; i < books.length ; i++)
  {
    if (books[i].id == id) { let title = books[i].title; delete books[i]; return title;}
  }
}

function sortByTitle()
{
  let str_sorted_books = "";

  books.sort(function(a,b) {return a.title < b.title ? -1 : 1});
  for (i = 0 ; i < books.length-1 ; i++)
  {
    str_sorted_books += books[i].title + "<br>";
  }

  return str_sorted_books;

}

document.getElementById("all-rented-books").innerHTML = (allBooksRented() ?  "Oui" : "Non");
document.getElementById("most-rented-book").innerHTML = mostRentedBook();
document.getElementById("less-rented-book").innerHTML = lessRentedBook();
document.getElementById("get-book-by-id").innerHTML = findBookById(873495);
document.getElementById("remove-book-by-id").innerHTML = removeBookById(133712);
document.getElementById("sort-books-by-title").innerHTML = sortByTitle();

const ARN = [
  {protein: "Sérine", codons:["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"]},
  {protein: "Proline", codons:["CCU", "CCC", "CCA", "CCG"]},
  {protein: "Leucine", codons:["UUA", "UUG"]},
  {protein: "Phénylalanine", codons:["UUU","UUC"]},
  {protein: "Arginine", codons:["CGU","CGC", "CGA", "CGG", "AGA", "AGG"]},
  {protein: "Tyrosine", codons:["UAU","UAC"]}
];

document.getElementById("codons-convert-script").addEventListener("click", function(){
  arn_to_convert = document.getElementById("chain").value;
  
  let str_codon = "";
  let str_proteins = "";
  for (let i = 0 ; i < arn_to_convert.length ; i++)
  {
    str_codon += arn_to_convert[i];
    if ((i+1) % 3 == 0)
    {
      for (let a = 0 ; a < ARN.length ; a++)
      {
        for (let c = 0 ; c < ARN[a].codons.length ; c++)
        {
          if (ARN[a].codons[c] == str_codon)
          {
            str_proteins+= ARN[a].protein;
            str_codon = "";
            break;
          }
        }
      }
    }
  }
  document.getElementById("convert-codons-to-protein").innerHTML = str_proteins;

});

let tchat_content = "";

document.getElementById("tchat-script").addEventListener("click", function(){
  str_user_sentence = document.getElementById("tchat").value;
  tchat_content+="<b>Vous : </b>"+str_user_sentence+"<br>";

  if (str_user_sentence[str_user_sentence.length-1] == '?')
  {
    tchat_content+="<b>L'ado attardé : </b> Ouais ouais...<br>";
  } else if (str_user_sentence.length !=0 && str_user_sentence == str_user_sentence.toUpperCase())
  {
    tchat_content+="<b>L'ado attardé : </b> Pwa, calme-toi...<br>";
  } else if (str_user_sentence.toLowerCase().includes("fortnite"))
  {
    tchat_content+="<b>L'ado attardé : </b> On s' fait une partie soum-soum ?<br>";
  }  else if (str_user_sentence.length==0)
  {
    tchat_content+="<b>L'ado attardé : </b> T'es en PLS ?<br>";
  } else {
    tchat_content+="<b>L'ado attardé : </b> Balek.<br>";
  }

  document.getElementById("tchat-content").innerHTML = tchat_content;
  document.getElementById("content").scrollTop = document.getElementById("content").scrollHeight;

});