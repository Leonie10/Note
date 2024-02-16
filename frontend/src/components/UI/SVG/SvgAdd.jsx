import useDragger from "../../../hooks/useDragger";


const SvgAdd = (props) => {

    return  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="25" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="25" preserveAspectRatio="xMidYMid meet" version="1.0">
                    <defs><filter id="inset-shadow">
                <feOffset dx="10" dy="10"/>                                                         
                <feGaussianBlur stdDeviation="10"  result="offset-blur"/>                           
                <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/> 
                <feFlood flood-color="black" flood-opacity="1" result="color"/>                     
                <feComposite operator="in" in="color" in2="inverse" result="shadow"/>               
                <feComponentTransfer in="shadow" result="shadow">                                   
                    <feFuncA type="linear" slope=".75"/>
                </feComponentTransfer>
                <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
                                     
                </filter></defs>

                <rect width="100" height="100" fill="yellow" filter="url(#inset-shadow)"/>
                <rect x="-37.5" width="450" fill="#c2c223" y="-37.499999" height="449.999989" fill-opacity="1"/>
                <rect x="-37.5" width="450" fill="#313131" y="-37.499999" height="449.999989" fill-opacity="1"/>
                <path filter="url(#inset-shadow)" fill="#262626" d="M 207.742188 374.996094 L 167.261719 374.996094 C 159.027344 374.996094 152.351562 368.320312 152.351562 360.082031 L 152.351562 226.515625 C 152.351562 224.378906 150.621094 222.648438 148.484375 222.648438 L 14.917969 222.648438 C 6.683594 222.648438 0.0078125 215.972656 0.0078125 207.734375 L 0.0078125 167.261719 C 0.0078125 159.027344 6.679688 152.351562 14.917969 152.351562 L 148.484375 152.351562 C 150.621094 152.351562 152.351562 150.617188 152.351562 148.480469 L 152.351562 14.914062 C 152.351562 6.679688 159.027344 0.00390625 167.261719 0.00390625 L 207.738281 0.00390625 C 215.972656 0.00390625 222.648438 6.679688 222.648438 14.917969 L 222.648438 148.480469 C 222.648438 150.617188 224.378906 152.351562 226.519531 152.351562 L 360.085938 152.351562 C 368.320312 152.351562 374.996094 159.027344 374.996094 167.261719 L 374.996094 207.738281 C 374.996094 215.972656 368.320312 222.648438 360.085938 222.648438 L 226.519531 222.648438 C 224.378906 222.648438 222.648438 224.378906 222.648438 226.515625 L 222.648438 360.082031 C 222.648438 368.320312 215.972656 374.996094 207.742188 374.996094 " fill-opacity="1" fill-rule="nonzero"/>
    </svg>
}

export default SvgAdd;

//  <div class="container">
//   <header>
//   <div className="btn"> 

//       <span class="btn-delete"></span>
//       <span class="btn-less"></span>
//       <span class="btn-more"></span>
                        
//   </div>
  
//    <div>
   
//       <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="50" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="50" preserveAspectRatio="xMidYMid meet" version="1.0">
//       <defs><filter id="inset-shadow">
//   <feOffset dx="10" dy="10"/>                                                         <!-- Shadow Offset -->
//   <feGaussianBlur stdDeviation="10"  result="offset-blur"/>                           <!-- Shadow Blur -->
//   <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/> <!-- Invert the drop shadow to create an inner shadow -->
//   <feFlood flood-color="black" flood-opacity="1" result="color"/>                     <!-- Color & Opacity -->
//   <feComposite operator="in" in="color" in2="inverse" result="shadow"/>               <!-- Clip color inside shadow -->
//   <feComponentTransfer in="shadow" result="shadow">                                   <!-- Shadow Opacity -->
//       <feFuncA type="linear" slope=".75"/>
//   </feComponentTransfer>
//   <!--<feComposite operator="over" in="shadow" in2="SourceGraphic"/>-->                       <!-- Put shadow over original object -->
// </filter></defs>

// <rect width="100" height="100" fill="yellow" filter="url(#inset-shadow)"/>
//       <rect x="-37.5" width="450" fill="#c2c223" y="-37.499999" height="449.999989" fill-opacity="1"/>
//       <rect x="-37.5" width="450" fill="#313131" y="-37.499999" height="449.999989" fill-opacity="1"/>
//       <path filter="url(#inset-shadow)" (fill="#262626" d="M 207.742188 374.996094 L 167.261719 374.996094 C 159.027344 374.996094 152.351562 368.320312 152.351562 360.082031 L 152.351562 226.515625 C 152.351562 224.378906 150.621094 222.648438 148.484375 222.648438 L 14.917969 222.648438 C 6.683594 222.648438 0.0078125 215.972656 0.0078125 207.734375 L 0.0078125 167.261719 C 0.0078125 159.027344 6.679688 152.351562 14.917969 152.351562 L 148.484375 152.351562 C 150.621094 152.351562 152.351562 150.617188 152.351562 148.480469 L 152.351562 14.914062 C 152.351562 6.679688 159.027344 0.00390625 167.261719 0.00390625 L 207.738281 0.00390625 C 215.972656 0.00390625 222.648438 6.679688 222.648438 14.917969 L 222.648438 148.480469 C 222.648438 150.617188 224.378906 152.351562 226.519531 152.351562 L 360.085938 152.351562 C 368.320312 152.351562 374.996094 159.027344 374.996094 167.261719 L 374.996094 207.738281 C 374.996094 215.972656 368.320312 222.648438 360.085938 222.648438 L 226.519531 222.648438 C 224.378906 222.648438 222.648438 224.378906 222.648438 226.515625 L 222.648438 360.082031 C 222.648438 368.320312 215.972656 374.996094 207.742188 374.996094 " fill-opacity="1" fill-rule="nonzero"/>
//       </svg>
      
//   </div>
  
// </header>
  
  
 
// </div>


// <svg className={props.class} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="25" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="25" preserveAspectRatio="xMidYMid meet" version="1.0">
//     <rect x="-37.5" width="450" fill="#ffffff" y="-37.499999" height="449.999989" fill-opacity="1"/>
//     <rect x="-37.5" width="450" fill="#313131" y="-37.499999" height="449.999989" fill-opacity="1"/><path fill="#1e1e1d" d="M 207.742188 374.996094 L 167.261719 374.996094 C 159.027344 374.996094 152.351562 368.320312 152.351562 360.082031 L 152.351562 226.515625 C 152.351562 224.378906 150.621094 222.648438 148.484375 222.648438 L 14.917969 222.648438 C 6.683594 222.648438 0.0078125 215.972656 0.0078125 207.734375 L 0.0078125 167.261719 C 0.0078125 159.027344 6.679688 152.351562 14.917969 152.351562 L 148.484375 152.351562 C 150.621094 152.351562 152.351562 150.617188 152.351562 148.480469 L 152.351562 14.914062 C 152.351562 6.679688 159.027344 0.00390625 167.261719 0.00390625 L 207.738281 0.00390625 C 215.972656 0.00390625 222.648438 6.679688 222.648438 14.917969 L 222.648438 148.480469 C 222.648438 150.617188 224.378906 152.351562 226.519531 152.351562 L 360.085938 152.351562 C 368.320312 152.351562 374.996094 159.027344 374.996094 167.261719 L 374.996094 207.738281 C 374.996094 215.972656 368.320312 222.648438 360.085938 222.648438 L 226.519531 222.648438 C 224.378906 222.648438 222.648438 224.378906 222.648438 226.515625 L 222.648438 360.082031 C 222.648438 368.320312 215.972656 374.996094 207.742188 374.996094 " fill-opacity="1" fill-rule="nonzero"/>
//     </svg>
