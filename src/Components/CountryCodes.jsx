import React from 'react'

function CountryCodes() {
  return (
    <select name="countryCode" className=' py-1 bg-transparent border border-white text-white' id="">
	<option    className='text-black' value="44" selected={true}>UK (+44)</option>
	<option    className='text-black' value="1">USA (+1)</option>
	<optgroup label="Other countries" className='text-black'>
		<option  value="213">Algeria (+213)</option>
		<option  value="376">Andorra (+376)</option>
		<option  value="244">Angola (+244)</option>
		<option  value="1264">Anguilla (+1264)</option>
		<option  value="1268">Antigua &amp; Barbuda (+1268)</option>
		<option value="54">Argentina (+54)</option>
		<option value="374">Armenia (+374)</option>
		<option value="297">Aruba (+297)</option>
		<option  value="61">Australia (+61)</option>
		<option  value="43">Austria (+43)</option>
		<option value="994">Azerbaijan (+994)</option>
		<option  value="1242">Bahamas (+1242)</option>
		<option  value="973">Bahrain (+973)</option>
		<option   value="880">Bangladesh (+880)</option>
		<option    value="1246">Barbados (+1246)</option>
		<option    value="375">Belarus (+375)</option>
		<option    value="32">Belgium (+32)</option>
		<option    value="501">Belize (+501)</option>

	</optgroup>
</select>
  )
}

export default CountryCodes