var names = [
      
    "2. QiYi Warrior W",
      
     "3. MFJS Meilong 3*3 M",
    ];
    
    var images = [
      "https://th.bing.com/th/id/OIP.ClyR-omA5wT4Kx2qzedzrgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "https://cuboss.com/wp-content/uploads/2020/09/mfjs-meilong-3x3-m.jpg",
    ];
    
    var x = 0;
    function nextslide() {
      
      document.getElementById("text").innerHTML = names[x];
      document.getElementById("album").src =
        images[x];
      x++;
    }
    
    