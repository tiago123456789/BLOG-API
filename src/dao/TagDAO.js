import DAO from "./DAO";
import TagCollection from "../collections/Tag";

class TagDAO extends DAO {
    
   constructor() {
       super(TagCollection);
   }

   async findByName(name) {
       return this.getDAO().findOne({ name: name });
   }
}

export default TagDAO;