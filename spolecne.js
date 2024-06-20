/*Na všech stránkách webu je horní navigace se třemi odkazy. 
Pro úsporu místa na malých zařízeních se mění na tlačítko s ikonkou hamburgeru. 
Zařiďte, aby klikání na tlačítko rozbalovalo a opět skrývalo položky menu.

V souboru spolecne.js najděte pomocí document.querySelector prvek s id menu-tlacitko. DONE

Přidejte mu posluchač události kliknutí.DONE

Přidejte prvku s id menu-polozky třídu show ve chvíli, kdy událost nastane.DONE

Rozšiřte kód tak, aby se třída show naopak odebrala, pokud ji prvek již měl.

Bonus

Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.

HTML ikonky křížku: <i class="fas fa-xmark"></i>
HTML ikonky hamburgeru: <i class="fas fa-bars"></i>
*/

const tlacitko = document.querySelector("#menu-tlacitko")
const changeButton = document.querySelector ("#menu-polozky")
const fas = document.querySelector(".fas")

const hamburger = () => {
	if (changeButton.classList.contains("show")) {
		changeButton.classList.remove("show")
		fas.classList.remove("fa-xmark")
		fas.classList.add("fa-bars")
	} else {
		changeButton.classList.add("show")
		fas.classList.add("fa-xmark")
		fas.classList.remove("fa-bars")
	}	
}
tlacitko.addEventListener("click", hamburger)
