function set_date() {
	const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
	var month = document.getElementById("month")

	const date = new Date()
	month.innerHTML = months[date.getMonth()] + " <em>" + date.getFullYear() + "</em>"
}

function show_time() {
	var date = new Date()
	var h = date.getHours()
	var m = date.getMinutes()

	h = (h < 10) ? "0" + h : h
	m = (m < 10) ? "0" + m : m

	document.getElementById("hour").innerText = h + ":" + m
	setTimeout(show_time, 1000)
}

function toggle_navbar() {
	const toggle_button = document.querySelector(".toggle-button")
	toggle_button.addEventListener('click', function () {
		document.getElementsByTagName("nav")[0].classList.toggle('active')
	})
}

