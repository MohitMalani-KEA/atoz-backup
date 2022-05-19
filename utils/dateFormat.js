export const formatDate = (date) => {
	if (date) {
		let year = date.slice(11, 15)
		let month = date.slice(4, 7)
		let day = date.slice(8, 10)
	
		let newDate = `${month} ${day}, ${year}`
	
		return newDate
	}

}