const { login } = require("./auth");

test("Regression Test - Sai mật khẩu", () => {
    expect(login("admin", "wrong")).toBe(false);
});

test("Regression Test - Username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Regression Test - Mật khẩu chứa ký tự đặc biệt", () => {
    expect(login("admin", "@@@")).toBe(false);
});

test("Regression Test - Tài khoản bị khóa", () => {
    expect(login("locked", "123")).toBe(false);
});
