import React,{Component} from 'react';

class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
            nama   : '',
            alamat : '',
            hobi   : '',
            umur: null
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        let umur = this.state.umur;
        if (!Number(umur)) {
            alert("silahkan isi usia anda terlebih dahulu");
        }
    }

    onChangeHandler = (event) => {
        let nama   = event.target.name;
        let alamat = event.target.alamat;
        let hobi   = event.target.hobi;
        let val = event.target.value;
        this.setState({
            [nama]  : val,
            [alamat]:val,
            [hobi]: ''
        });
    }

    render() {
        return(
            <div className="wraperform">
                <form onSubmit={this.onSubmitHandler}>
                    <h1>Hallo {this.state.name}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="nama" className="text"/>
                    <h1>Sebutkan salah satu hobi kamu {this.state.hobi}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="hobi" className="text"/>
                    <h1>Umur kamu adalah {this.state.umur}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="umur" className="text"/>
                    <h1>Alamat tinggal {this.state.alamat}</h1>
                    <textarea onChange={this.onChangeHandler} name="alamat" className="textarea"></textarea>
                    <hr/>
                    <input type="submit" onClick={this.updateState} value="Simpan Data" className="button"/>
                </form>
            </div>
        );
    }
}

export default Form;