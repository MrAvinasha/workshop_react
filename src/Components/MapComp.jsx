function MapComp(){
   const data = [
    {
        uni_name: "OUSL",
        para: "Welcome to OUSL", 
        img_src: "https://my.alfred.edu/zoom/_images/powell.jpg"
    },
    {
        uni_name: "UoM", 
        para: "Welcome to UoM", 
        img_src: "https://png.pngtree.com/thumb_back/fh260/background/20220904/pngtree-folwell-hall-university-of-minnesota-learning-follwell-hall-student-photo-image_6529094.jpg"
    },
    {
        uni_name: "UoW", 
        para: "Welcome to UoW", 
        img_src: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?cs=srgb&dl=pexels-pixabay-159490.jpg&fm=jpg"
    },
    {
        uni_name: "UoA",
        para: "Welcome to UoA", 
        img_src: "https://www.auckland.ac.nz/assets/central/about/our-story/2019-Images/Clocktower.jpg"
    },
    {
        uni_name: "UoC", 
        para: "Welcome to UoC", 
        img_src: "https://www.canterbury.ac.nz/media/images/2019/campus-1.jpg"
    }
];

return (
        <div>
            {data.map((value,i)=>(
                <div class Name="uni" key={i}>
        
                    <img src={value.img_src} alt="open" style={{borderRadius:"20px", textAlign:"center",width:"400px"}} />
                    <h1 style={{color:"red"}}>Hello <b style={{color:"blue"}}>{value.uni_name}</b></h1>
                    <h3 style={{color:"black"}}>{value.para}</h3>
                </div>
            ))}
        </div>
    );
}
export default MapComp

