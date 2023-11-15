function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GJBFw7RoUY":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v35q1attempts:player.GetVar("v35q1attempts"),v35q1answeredcorrect:player.GetVar("v35q1answeredcorrect"),v35q2attempts:player.GetVar("v35q2attempts"),v35q2answeredcorrect:player.GetVar("v35q2answeredcorrect")})
	}
	)
}

