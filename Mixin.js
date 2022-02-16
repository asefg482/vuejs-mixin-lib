import Vue from "vue";

export default Vue.mixin({
    methods: {
        Only_Number(Evt) {
            Evt = (Evt) ? Evt : window.event;
            let charCode = (Evt.which) ? Evt.which : Evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                Evt.preventDefault();
            } else {
                return true;
            }
        },
        Check_Json_Validate(Json_Data) {
            try {
                JSON.parse(Json_Data);
            } catch (e) {
                return e.message;
            }
            return true;
        },
        Filter_Var(Text) {
            let Return_Data = true;
            for (let i = 0; i <= this.Filter_Vars.length - 1; i++) {
                if (Return_Data == false) {
                    break;
                }
                for (let j = 0; j <= this.Filter_Vars.length - 1; j++) {
                    if (Text[j] == this.Filter_Vars[i] || Text[j] === this.Filter_Vars[i]) {
                        Return_Data = false;
                        break;
                    } else {
                        Return_Data = true;
                    }
                }
            }
            return Return_Data;
        },
        Get_PHP_API(URL) {
            return this.PHP_API_Specifications.HTTP_API_Path + URL;
        },
        Persian_HTTP_Request(Requast_Code = 0) {
            switch (Requast_Code) {
                case 0:
                    break;
W
                case 403:
                    break;

                case 404:
                    break;

                case 200:
                    break;

                case 201:
                    break;

                case 408:
                    break;
            }
        }
    },
    data() {
        return {
            /********************  Const Vars *******************/
            PHP_API_Specifications: {
                HTTP_API_Path: "http://localhost/Asefg_IR_View_Demo/public/PHP/"
            },
            reCaptcha: {
                Verify_URL: "https://www.google.com/recaptcha/api/siteverify",
                reCaptcha_Site_Key: "6LcBSFEaAAAAANn4bKg-PYRYMmKJZ7k3GX_4u8z3",
                reCaptcha_Security_Key: "6LcBSFEaAAAAAAnkoA3iRm4OWo34RBeGjbCDNwsc",
            },
            /**********************  Others *********************/
            Filter_Vars: [
                '[',
                ']',
                '}',
                '{',
                '<',
                '>',
                '/',
                '#',
                '^',
                '*',
                '&',
                '$',
                '%'
            ],
        };
    }
});

