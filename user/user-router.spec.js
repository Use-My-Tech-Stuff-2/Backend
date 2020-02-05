const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig')

describe('root', () => {
    test('test should begin', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });
});

describe('register functionality', () =>{
    it('returns JSON', () => {
        return request(server)
        .post("/api/register")
        .send({
            username: "money",
            password: "123",
            department: "owner"
        })    
        .then(res => {
            expect(res.type).toBe("application/json");
        })
    })

    it('returns 201', () => {
        return request(server)
        .post("/api/register")
        .send({
            username:"money",
            password:"123",
            department:"owner"
        })    
        .then(res => {
            expect(res.status).toBe(201);
        })
    })

})

describe("login functionality", () => {
    it("should return status 200", async () => {
      const res = await request(server)
        .post("/login")
        .send({ username: "test", password: "123" });
  
      expect(res.status).toBe(200);
    });
  
    it("should return a token", async () => {
      const res = await request(server)
        .post("/login")
        .send({ username: "test", password: "123" });
  
      expect(res.body.token).toBeTruthy();
    });
  
    it("should return json", async () => {
      const res = await request(server)
        .post("/")
        .send({ username: "test", password: "123" });
  
      expect(res.type).toBe("application/json");
    });
  });
