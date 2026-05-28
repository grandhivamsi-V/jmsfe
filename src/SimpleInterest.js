export default function SimpleInterest() {
   let p = 70000;
   let t = 1;
   let r = 2;

   let SimpleInterest = () => (p*t*r)/100
     
   return(
    <div>
        <p>Principal Amount : {p}</p>
        <p>Tennure : {t}</p>
        <p>Rate Of Interst: {r}</p>
        <p>SimpleInterest is : {SimpleInterest()}</p>
    </div>
  );
}