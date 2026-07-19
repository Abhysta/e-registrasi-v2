# Rule Communication

- Keep your answers brief and to the point, without beating around the bush
- Don’t explain the code unless asked
- Don’t include a summary at the end unless asked
- Don’t repost code that hasn’t changed
- For minor edits, show only the changed parts (diff), not the entire file
- No need to ask, “Do you want me to...?” — just do it
- No need for emojis or excessive headings

# Application Specification

- Tech Stack : Prisma, Mysql, ExpressJs

# Application Rule Folder

- config folder : use for setup database prisma configuration and web server configuration
- routes folder : use for setup api routes configuration
- controller folder : use for setup api controller configuration
- middleware folder : use for setup api middleware configuration
- validation folder : use for setup api validation configuration
- util folder : use for setup api util configuration
- service folder : use for setup api service configuration and logic the application
- error folder : use for setup error handling configuration
- app.js : use for running the application

# Application Rule Api

- All api must use prisma for database configuration
- All api must use validation for input data
- All api must use error handling for error response
- All api must return json response
- All api must use middleware for authentication and authorization

# Application Usage

## POST Data Register Training

- User Register Training Always Insert in Database "tbl_assign" with the relation to "tabel_peserta" and "satuan_kerja"
- always verify what user input and validation that, but it can null because we have 2 rule where user agree or decline that insert in table "bersedia"
- in database "master_berkas" have relation to in "tbl_assign" with the id_assign
- the flow is user input => choice aggre or decline => insert data into "tbl_assign" if user aggree insert all data in table assign and all the relation, if user decline only input table "bersedia" and database "master_berkas" with file decline confirmation

### Rule of Response after Post Data Training

{
status: 200,
message: "Data Training berhasil ditambahkan",
}

## PATCH Data Register Training

- User can update data register during the time "mulai_registrasi" and "batas_registrasi"
- always verify what user input and validation that

### Rule of Update

- Use Where id_peserta and id_assign because column id_peserta is unique

### Rule of Response after Update Data Training

{
status: 200,
message: "Data Training berhasil diupdate",
}

## GET Data Register Training

- User can get data by "id_peserta" in table "tbl_assign"

### Rule of Response after Get Data Training

{
"status": 200,
"data": [
{
"id_assign":1,
json data table pelatihan
},
]
}

# Note

- ignore table pelatihan for now because it didnt create
