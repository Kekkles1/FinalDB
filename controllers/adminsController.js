const {getConnection} = require("../config/connection");

module.exports={

    getAllAdmins: async function  (req, res){
        let connection ;
        try {
          console.log("hitttt--<<<<<<")
            connection = await getConnection();
            const table = await connection.execute("SELECT * FROM admin");
            // console.log(table.rows);
            res.status(200).send(table);
          } catch (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Internal Server Error');
          } finally {
            if (connection) {
              try {
                // Release the connection when done
                await connection.close();
              } catch (error) {
                console.error('Error closing database connection:', error);
              }
            }
        } 
        // return table;
    },
    
    AddNewAdmin: async function (req, res){
      let connection ;
      try {
          connection = await getConnection();
          const query = `INSERT INTO admin (admin_id,username,password) VALUES (:1, :2, :3) `;
          const binds = [req.body.admin_id, req.body.username, req.body.password];
          const options = {
            autoCommit: true, 
          };
          
          await connection.execute(query,binds,options);
          res.status(202).send("Added Admin");
      } 
      catch (error) {
          console.error('Error executing SQL query:', error);
          res.status(500).send('Internal Server Error');
        
      } 
      finally {
          if (connection) {
            try {
              // Release the connection when done
              await connection.close();
            } catch (error) {
              console.error('Error closing database connection:', error);
            }
          }
      }
  },

  AddNewShow: async function (req, res){
    let connection ;
    try {
        connection = await getConnection();
        const query = `INSERT INTO tv_show (tv_show_id,name,season,genre,synopsis,lang,rating) VALUES (:1, :2, :3, :4, :5, :6, :7)`;
        const binds = [req.body.tv_show_id,req.body.name,req.body.season,req.body.genre,req.body.synopsis,req.body.lang,req.body.rating];
        const options = {
          autoCommit: true, 
        };
        
        await connection.execute(query,binds,options);
        res.status(202).send("Added TV Show");
    } 
    catch (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).send('Internal Server Error');
      
    } 
    finally {
        if (connection) {
          try {
            // Release the connection when done
            await connection.close();
          } catch (error) {
            console.error('Error closing database connection:', error);
          }
        }
    }
},

//This works because admin_id is not a foreign key anywhere
DeleteAdminID : async function (req, res){
  
  let connection ;
  try{
    connection = await getConnection();
    const query = `DELETE FROM admin WHERE admin_id = :1`;
    const binds = [req.body.admin_id];
    const options = {
      autoCommit: true, // Commit each insert immediately
    };

    await connection.execute(query,binds,options);
    res.status(202).send("Deleted Admin");
  }
  catch(error){
    console.log("Error executing SQL query:" ,error)
    res.status(500).send('Internal Server Error');
  }
  finally{
    if(connection){
      try{
        await connection.close();
      }
      catch(error){
        console.log("Error closing database connection:", error);
      }
    }
  }
}
}