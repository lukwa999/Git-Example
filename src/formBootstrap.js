import React from 'react'

function formBootstrap() {
  return (
    <div className='mt-3 mx-auto p-3' style={{width:'400px',background:'#cee'}}>
        <form>
            <div className='form-group mb-3'>
                <label htmlFor='login'>Email</label>
                <input type='text' id='login' name='login' className='form-control' ></input>
            </div>
            <div className='from-group mb-3'>
                <label htmlFor='pswd'>Password</label>
                <input type='password' id='pswd' name='pswd' className='form-control' ></input>
            </div>
            <div className='from-group mb-4'>
                <label htmlFor='select1'>Select</label>
                <select id='select1' name='select1' className='form-select'> 
                    <option value='1'>Item 1</option>
                    <option value='2'>Item 2</option>
                    <option value='3'>Item 3</option>
                </select>
            </div>
            <div className='from-group mb-5'>
                <label htmlFor='File'>Upload Pic</label>
                <input type='file' id='File' name='File' className='form-control' ></input>
            </div>
            <div className='from-group mb-5'>
                <label htmlFor='File2'>Upload Pic</label>
                <input type='file' id='File2' name='File2' className='form-control' ></input>
            </div>
            <button className='btn btn-primary'>OK</button>
            
        </form>
    </div>
  )
}

export default formBootstrap