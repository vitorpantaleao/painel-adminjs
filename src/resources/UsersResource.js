import Adminjs from "adminjs";
import User from "../models/user";

export default {
    resource: User,
    options: {
        parent: {
            icon: "User",
        },
        actions: {
            resetPassword: {
                actionType: "record",
                icon: "Password",
                handler: async (req, res, context) => {
                    // const { password } = req.body;
                    // if (!password) {
                    //     return res.status(400).json({
                    //         message: "Password is required",
                    //     });
                    // }
                    // context.password = password;
                    // await context.save();
                    // return res.json({
                    //     message: "Password reset successfully",
                    // });
                    return {
                        record: context.record.toJSON(),
                    }
                },
            },
        },
        properties: {
            id: {
                position: 1
            },
            initials: {
                position: 2,
                isVisible: {list: true, filter: false, edit: false, show: true}
            },
            name: {
                position: 3,
                isRequired: true,
            },
            email: {
                position: 4,
                isRequired: true,
            },
            role: {
                position: 5,
                isRequired: true,
                availableValues: [
                    { value: 'admin', label: 'Administrador' },
                    { value: 'manager', label: 'Gerente' },
                    { value: 'developer', label: 'Desenvolvedor' },
                ]
            },
            status: {
                position: 6,
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo' },
                    { value: 'archived', label: 'Arquivado' },
                ]
            },
            createdAt: {
                position: 7,
                isVisible: {list: true, filter: true, edit: false, show: true}
            },
            updatedAt: {
                position: 8,
                isVisible: {list: true, filter: true, edit: false, show: true}
            },
            password: {
                isVisible: false,
            },
            password_hash: {
                isVisible: false,
            },
        }
    }
}