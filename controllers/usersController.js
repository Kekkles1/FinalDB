const {getConnection} = require("../config/connection");

module.exports={

    getAllUsers: async function  (req, res){
        let connection ;
        try {
          console.log("hitttt--<<<<<<")
            connection = await getConnection();
            const table = await connection.execute("SELECT * FROM users");
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
    
    AddNewUser: async function (req, res){
      let connection ;
      try {
          connection = await getConnection();
          const query = `INSERT INTO users (user_id,username,password) VALUES (:1, :2, :3)`;
          const binds = [req.body.user_id, req.body.username, req.body.password];
          const options = {
            autoCommit: true, 
          };
          
          await connection.execute(query,binds,options);
          res.status(202).send("Added User");
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

  getAllTvShows: async function  (req, res){
    let connection ;
    try {
      console.log("hitttt--<<<<<<")
        connection = await getConnection();
        const table = await connection.execute("SELECT * FROM tv_show");
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
}
}