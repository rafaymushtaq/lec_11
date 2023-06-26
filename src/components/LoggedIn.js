

export function LoggedIn(){
  let LoggedIn = true;
  return LoggedIn ? <h2>Welcome to Dashboard </h2> : <h2>Please Sign Up for Continue </h2>;

}

export function LoggedInTernary(){
  let LoggedIn = true;
  return (
    <div>
    
    {
      LoggedIn ? (
        <h2>Welcome to Dashboard </h2>

      ) : (
        <h2>Please Sign Up for Continue </h2>
      ) 

    }
    </div>

  );
}

export function LoggedInLogical(){
  let LoggedIn = true;
  let value = 5;
  return (
    <div>
      { value > 0 && <h2>Value is greater then zero</h2>}
    </div>
  )
;

}