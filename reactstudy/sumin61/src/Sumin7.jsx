
function Sumin7(props) {
// function Sumin7({children, author, insa}) { // 이것도 구조분해
    const {author, insa, children} = props;
    // const {author, insa, children} = props;
    // console.log("체크",children)
  return (
    <div>
        <h1>{author}수민 {insa}</h1>
        <div style={{border:"5px groove gold"}}>
        {children}
        </div>
    </div>
  )
}

export default Sumin7