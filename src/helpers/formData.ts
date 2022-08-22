export default function formData(name: string, email: string, phone: string,  position_id: string, photo: File) {
    const user = new FormData()

    user.append('name',  name);
    user.append('email', email)
    user.append('phone', phone)
    user.append('position_id', position_id)
    user.append('photo', photo)

    return user;
}