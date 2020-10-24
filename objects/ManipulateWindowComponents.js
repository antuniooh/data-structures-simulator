/**
 * @class       : ManipulateWindowComponents
 * @author      : Henrique Vital Carvalho (henriquevital1000@hotmail.com)
 * @created     : sexta out 23, 2020 21:15:09 -03
 * @description : Manipulate window components
 */

class ManipulateWindowComponents {
    verify_entry(entry, button) {
        let entry_obj = document.getElementById(entry);
        let button_obj = document.getElementById(button);
        if (entry_obj.value === "") {
            button_obj.style.backgroundColor = "#808080";
            button_obj.disabled = true;
        }
        else {
            button_obj.disabled = false;
            button_obj.style.backgroundColor = "#ee6f57";
        }
    }
    verify_multiple_entry(entry1, entry2, button) {
        let entry1_obj = document.getElementById(entry1);
        let entry2_obj = document.getElementById(entry2);
        let button_obj = document.getElementById(button);
        if (entry1_obj.value === "" || entry2_obj.value === "") {
            button_obj.style.backgroundColor = "#808080";
            button_obj.disabled = true;
        }
        else {
            button_obj.disabled = false;
            button_obj.style.backgroundColor = "#ee6f57";
        }
    }
}

var manipulate_window_components_obj = new ManipulateWindowComponents();

