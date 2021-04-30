import React from "react"

class AgeSearch extends React.Component {
    readNumber(event){
        event.preventDefault();
            let element = document.querySelector("#number");

                fetch("/api/ages/:number/" + element.value)
                .then((res) => {
                return res.json();
                })

            .then((processed) => {
            let reporting = document.querySelector ("#reportingArea");
                if(processed.error) {
                    reporting.innerHTML = processed.error;
                } else {
                    reporting.innerHTML = processed.name;
                }
                });
   element.value = "";
    }
    render() {
        return (
            <div>
                <h2> Age </h2>
                <form onSubmit= {this.readNumber}>
                    <input id="number" type ="text"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default AgeSearch;