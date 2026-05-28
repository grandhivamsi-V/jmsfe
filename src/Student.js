export default function Student(){
  let sid = 101;
  let sname = "sai";
  let smarks = [55,77,98,67,88];

  let totalMarks = function(){
    return smarks.reduce((e1,e2) => e1 + e2);
  }
  let averageMarks = () =>{
    let avg = smarks.reduce((e1,e2) => e1 + e2);
    return avg/5;
  }

  return(
    <div >
        <p>Stdudent ID : {sid}</p>
        <p>Stdudent NAME : {sname}</p>
        <ol>  Stdudent Marks :
      
           <li>{smarks[0]}</li>
           <li>{smarks[1]}</li>
           <li>{smarks[2]}</li>
           <li>{smarks[3]}</li>
           <li>{smarks[4]}</li>
        </ol>
        <p>Stdudent TotalMarks : {totalMarks()}</p>
        <p>Stdudent averageMarks : {averageMarks()}</p>
    </div>
  );
}