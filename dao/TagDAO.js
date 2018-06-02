import DAO from "./DAO";
import TagCollection from "./../collections/Tag";

class TagDAO extends DAO {
    
   constructor() {
       super(TagCollection);
   }
}

export default TagDAO;