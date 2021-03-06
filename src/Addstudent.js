
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { useFormik } from "formik";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const formValidationSchema = yup.object({
    student_name: yup.string().required("Why not fill the student name?"),
    mentor_name: yup.string().min(4).required("why not fill the mentor name?"),
    batch: yup.string().required("why not fill the batch"),

})
export function AddForm() {
    
    const sty={width:"20rem",height:"2rem",margin:"1rem"};
    const mar={margin:"1rem"}
    const history = useHistory();
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            student_name: "",
            mentor_name: "",
            batch: ""
        },
        // validate: validateForm,
        validationSchema: formValidationSchema,
        onSubmit: (newstudent) => {
            console.log("onsubmit", newstudent);
            addstudent(newstudent)
        },
    });

    const addstudent = (newstudent) => {
        
       
    // fetch(`https://deepastudentmentor.herokuapp.com/student`,
    //         {
    //             method: "POST",
    //             body: JSON.stringify(newstudent),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         .then(() => history.push("/students"));
    // };
    
        fetch("https://deepastudentmentor.herokuapp.com/student",
        {
                        method: "POST",
                        body: JSON.stringify(newstudent),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(() => history.push("/students"));
      };

    return (
        <form onSubmit={handleSubmit} className="adding">
            {/* <input
                id="student_name"
                name="student_name"
                value={values.student_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Student name" />
            {errors.student_name && touched.student_name && errors.student_name}<br /> */}
            <TextField 
            id="student_name"
            name="student_name"
            value={values.student_name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={sty}
            placeholder="Student name" />
            {errors.student_name && touched.student_name && errors.student_name}<br />
            {/* <input
                id="mentor_name"
                name="mentor_name"
                value={values.mentor_name}
                onChange={handleChange}
                onBlur={handleBlur}

                placeholder="Mentor name" /> */}
                <TextField 
            id="mentor_name"
            name="mentor_name"
            value={values.mentor_name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={sty}
            placeholder="Mentor name" />
            {errors.mentor_name && touched.mentor_name && errors.mentor_name}<br />


            {/* <input
                id="batch"
                name="batch"
                value={values.batch}
                onChange={handleChange}
                onBlur={handleBlur}

                placeholder="Batch" /> */}
                <TextField 
            id="batch"
            name="batch"
            value={values.batch}
            onChange={handleChange}
            onBlur={handleBlur}
            style={sty}
            placeholder="Batch" />
            {errors.batch && touched.batch && errors.batch}<br />
            <Button type="submit" style={mar}variant="contained">Add</Button>
        </form>);
}