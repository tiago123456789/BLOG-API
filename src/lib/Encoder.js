import bcrypt from "bcrypt";

export default class Encoder {

    static async getHash(textPlain, saltRound = 10) {
        return await bcrypt.hash(textPlain, saltRound);
    }

    static async isEqual(textPlain, contentHash) {
        return await bcrypt.compare(textPlain, contentHash);
    }

}