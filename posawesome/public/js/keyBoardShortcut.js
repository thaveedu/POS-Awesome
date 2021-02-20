$(document).on('keydown', e => {
        if (frappe.get_route_str() === 'pos') {
	  console.log("Key prossed for "+e.keyCode);
          if (e.keyCode === 120) {
            // F9
            e.preventDefault();
            e.stopPropagation();
            if (this.cur_dialog && this.cur_dialog.display) {
              // hide payment cur_dialog if visible
              this.cur_dialog.hide();
            } else {
              $(this.numeric_keypad)
                .find('.pos-pay')
                .trigger('click');
            }
          } else if (e.ctrlKey && e.keyCode === 80) {
            // Ctrl + P
            e.preventDefault();
            e.stopPropagation();
            if (this.cur_dialog && this.cur_dialog.display) {
              this.cur_dialog.header
                .find('.buttons > .submit_print')
                .trigger('click');
              trigger_new_cart();
            } else if (this.frm.doc.docstatus == 1) {
              trigger_print();
            }
          } else if (e.ctrlKey && e.keyCode === 66) {
            // Ctrl + B
            e.preventDefault();
            e.stopPropagation();
            trigger_new_cart();
          } else if (e.ctrlKey && e.keyCode === 188) {
            if (this.sales_employee_field) {
              this.sales_employee_field.set_focus();
            }
          }
        }
      });
