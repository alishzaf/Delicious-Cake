
                //  Navbar Section 
 document.getElementById('nav').innerHTML+=
 ` <div class="logo">
 <img src="images/Logo.png" alt="">
</div>
<div class="nav-items ">
 <ul>
     <li><a href="Contact.html">Contact Us</a></li>
     <li><a href="about.html">About Us</a></li>
     <li><a href="cakes.html">Cake's</a></li>
     <li><a href="first.html">Home</a></li>
 </ul>
</div>
<div class="links">
 <i class="fa-brands fa-instagram"></i>
 <i class="fa-brands fa-facebook"></i>
</div>
 `
            
            // footer section 
 window.onload=function(){
    document.getElementById('footer').innerHTML+=
    `<footer class="footer">
    <div class="container-f">
        <!-- About Section -->
        <div class="footer-about">
            <h3>Cake</h3>
            <p>Deliciously crafted cakes for every occasion! We specialize in custom cakes, cupcakes, and more to make your celebrations sweet and unforgettable.</p>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>

        <!-- Contact Section -->
        <div class="footer-contact">
            <h4>Contact Us</h4>
            <ul>
                <li><strong>Phone:</strong> +1 (800) 123-4567</li>
                <li><strong>Email:</strong> info@ccake.com</li>
                <li><strong>Address:</strong> 123 Cake St, Sweet City, SC 54321</li>
            </ul>
        </div>

        <!-- Social Media Links -->
        <div class="footer-social">
            <h4>Follow Us</h4>
            <div class="social-icons">
                <a href="https://facebook.com/ccake">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
                </a>
                <a href="https://instagram.com/ccake">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram">
                </a>
          
                
    </div>

    <!-- Copyright Section -->
    <div class="footer-bottom">
        <p>&copy; 2024 Ccake. All Rights Reserved.</p>
    </div>
</footer>`
 }           
             //    Main cards Section
let obj= [
    {
        Card_image:'images/c1.jpg',
        Card_caption:'Sweeten Your Day with Our Heavenly Cakes',
    },
    {
        Card_image:'images/c2.jpg',
        Card_caption:'Sweet treats to make your day special.',
    },
    {
        Card_image:'images/c3-removebg-preview.png',
        Card_caption:"Indulge in the finest, freshest cakes.",
    },
    {
        Card_image:'images/c4.jpg',
        Card_caption:'Celebrate life’s moments with our exquisite cakes.',
    },
    {
        Card_image:'images/c5.png',
        Card_caption:'Fluffy, sweet cupcakes to brighten your day',
    },
    {
        Card_image:'images/c6.jpg',
        Card_caption:'Cupcakes that make every occasion sweeter',
    },
    {
        Card_image:'images/c7.png',
        Card_caption:'Tiny treats, big flavor in every bite',
    },
    {
        Card_image:'images/c8.png',
        Card_caption:'A little sweetness in every cupcake bite',
    },
]
for (let i in obj){
    document.getElementById('card-section').innerHTML +=
    `
    <div class="cards">

    <img src='${obj[i].Card_image}' alt="">
    <h1>'${obj[i].Card_caption}'</h1>
</div>
    `


} 



         


