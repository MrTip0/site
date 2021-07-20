import React from "react";

export default class Contact extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        name: "",
        mail: "",
        message: "",
        disabled: true,
        sent: false
    }

    handleChange(event: any) {
        const target = event.target;
        const value = target.value;
        const info = target.name;

        this.setState({
            [info]: value,
        });
        this.readyToSend();
    }

    handleSubmit(event: any) {
        if (!this.state.sent) {
            const xhttp = new XMLHttpRequest();
            var result = ""
            xhttp.open('POST', process.env.PUBLIC_URL + '/emailer.php', true)
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send('name=' + this.state.name + '&mail=' + this.state.mail + '&message=' + this.state.message)
            xhttp.onreadystatechange = ()=> {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    result = xhttp.responseText
                    alert(result)
                    if (result === 'success') {
                        this.setState({
                            sent: true
                        })
                    }
                }
            }
        }
        event.preventDefault()
    }

    readyToSend(){
        if (!this.state.sent && this.state.mail !== "" && this.state.name !== "" && this.state.message !== "") {
            this.setState({disabled: false})
        } else {
            this.setState({disabled: true})
        }
    }

    render() {
        return(
            <div className="h-auto bg-secondary-200 w-min-full flex flex-col">
                <h1 className="text-4xl text-center uppercase text-primary-500">Contact me</h1>
                <form onSubmit={this.handleSubmit} className="flex flex-col items-center">
                    <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} className="bg-primary-100 rounded mb-4 mt-4 h-10 w-11/12 text-lg text-center focus:ring-4 focus:ring-primary-200 shadow-lg transition-transform duration-200 transform focus:scale-110 sm:w-9/12 md:w-1/2" required/>
                    <input type="email" name="mail" placeholder="Email" onChange={this.handleChange} value={this.state.mail} className="bg-primary-100 rounded mb-4 h-10 w-11/12 text-lg text-center focus:ring-4 focus:ring-primary-200 shadow-lg transition-transform duration-200 transform focus:scale-110 sm:w-9/12 md:w-1/2" required/>
                    <textarea name="message" id="message" cols={30} rows={10} placeholder="Message" onChange={this.handleChange} value={this.state.message} className="bg-primary-100 rounded mb-4 w-11/12 text-lg text-center focus:ring-4 focus:ring-primary-200 shadow-lg transition-transform duration-200 transform focus:scale-110 sm:w-9/12 md:w-1/2" required/>
                    <input type="submit" value="Send" disabled={this.state.disabled} className={"bg-primary-100 rounded mb-4 h-10 w-11/12 text-lg text-center transition-transform duration-200 transform sm:w-9/12 md:w-1/2 " + (this.state.disabled ? "text-gray-500": "text-gray-900 hover:scale-110")}/>
                </form>
            </div>
        )
    }
}
