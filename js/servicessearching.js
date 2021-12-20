function autocomplete(inp, arr) {

    var currentFocus;

    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;

        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++) {

          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

            b = document.createElement("DIV");

            b.innerHTML = "<span>" + arr[i].substr(0, val.length) + "</span>";
            b.innerHTML += arr[i].substr(val.length);

            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

            b.addEventListener("click", function(e) {
      
                inp.value = this.getElementsByTagName("input")[0].value;

                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
      
          currentFocus++;
          
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          
          addActive(x);
        } else if (e.keyCode == 13) {
         
          e.preventDefault();
          if (currentFocus > -1) {
         
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      
      if (!x) return false;
      
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
     
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
    
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
     
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  

  var countries = [
      "Ahmedabad",
      "Banglore",
      "Chennai",
      "Delhi",
      "Jaipur",
      "Hyderabad",
      "Kolkata",
      "Mumbai",
      "Pune",
      "Nagpur",
      "Ludhiana",
      "Visakhapatnam",
      "Vadodra",
      "Lunknow",
      "Kochi",
      "Bhubaneshwar",
      "Kanpur",
      "Surat",
      "Indore",
      "Agra",
      "Bhopal",
      "Guwati",
      "Vijayawada",
      "Varanasi",
      "Thiruvananthapuram",
      "Patna",
      "Raipur",
      "Nashik",
      "Jabalpur",
      "Jamshedpur",
      "Dehradun",
      "Meerut",
      "Ranchi",
    ];
    

    // var countries  = [
    
    //   "Delhi"["new Delhi", "North Delhi",	"Central Delhi","South Delhi","	West Delhi","	East Delhi","	Shahdara"],
    //   'Kerala'["Thiruvananthapuram", "Palakkad","Alappuzha","Ernakulam","Kannur","Kozhikode","	Malappuram"],
    //  'AndhraPradesh'["Visakhapatnam","Anantapur", "Chittoor","East Godavari","Kadapa","Vizianagaram",],
    //   'TamilNmadu'["Chennai", "Kancheepuram","Vellore","Thiruvallur","Salem","Coimbatore","Madurai"],
    //   'Rajashthan'["Jaipur", "Jodhpur","Alwar","Nagaur","Udaipur","Sikar","Barmer"],
    //   'WestBengal'['Birbhum','Bardhaman','Hooghly','Howrah','Jalpaiguri','Cooch Behar', 'Kolkata'],
    //   'Punjab'['Amritsar','Barnala','Bathinda','Firozpur','Faridkot','Fatehgarh Sahib','Fazilka'],
    //   'MadhyaPradesh'['Alirajpur','Anuppur','Ashok Nagar','Balaghat','Barwani','Betul','Bhind','Bhopal'],
    //   'JammuKashmir'['Anantnag','Badgam','Bandipora','Baramulla','Doda','Ganderbal','Jammu'],
    //   'Maharashtra'['Ahmednagar','Akola','Amravati','Aurangabad','Bhandara','Buldhana','Chandrapur',"jalogaon"],
    //   'Bihar'['Araria','Aurangabad','Banka','Begusarai','Arwal','Bhagalpur','Bhojpur',],
    //  'UttarPradesh'['Agra','Allahabad','Aligarh','Ambedkar Nagar','Azamgarh','Barabanki','Budaun',],
    //   'Karnataka'['banglore','Koppal','Mandya','Mysore','Raichur','Shimoga','Tumkur','Udupi',],
    //   'Odisha'["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogar"],
    //   'Haryana'['Ambala','Faridabad','Fatehabad','Bhiwani','Gurgaon','Hissar','Jhajjar'],
    //   'Uttarakhand'['Almora','Bageshwar','Chamoli','Champawat','Dehradun','Haridwar','Nainital',],
    //   'Assam'['Baksa','Barpeta','Bongaigaon','Cachar','Chirang','Darrang','Dhemaji','Dima Hasao','Dhubri'],
    //   'Meghalaya'['East Garo Hills','East Khasi Hills','Jaintia Hills','Ri Bhoi','South Garo Hills','West Garo Hills','West Khasi Hills']

    //   ]

   
   
  
  autocomplete(document.getElementById("search-location"), countries);
  // autocomplete(document.getElementById("search-location"), countries);