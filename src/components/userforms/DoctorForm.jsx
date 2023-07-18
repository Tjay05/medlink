const DoctorForm = ({ docId, newData, setDocId, docPword, setDocPword, data}) => {
    return (
        <div className="form-field">
            <form >
                <label htmlFor="docId">Enter your Doctor Id</label>
                <br />
                <input
                    id="docId"
                    type="text"
                    placeholder="Doctor Id"
                    name="docId"
                    value={docId}
                    onChange={(e) => setDocId(e.target.value)}
                />
                <br />
                <label htmlFor="docPword">Enter your Password</label>
                <br />
                <input
                    id="docPword"
                    name="docPword"
                    type="password"
                    placeholder="Password"
                    value={docPword}
                    onChange={(e) => setDocPword(e.target.value)}
                />
                <p className="err-mssg" >{data}</p>
            </form>
        </div>
    );
}

export default DoctorForm;
