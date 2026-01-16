"use client";

import Modal from "@/components/layout/Modal";

export default function ConfirmModal({open, title = "Confirmação", message, confirmText = "Continuar mesmo assim", cancelText = "Voltar", onConfirm, onCancel,}) {
    return (
        <Modal open={open} onClose={onCancel} title={title}>
            <div className="space-y-4">
                <p className="text-sm text-gray-700">{message}</p>

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="h-11 px-5 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50"
                    >
                        {cancelText}
                    </button>

                    <button
                        type="button"
                        onClick={onConfirm}
                        className="h-11 px-5 rounded-md bg-primary text-white font-semibold hover:opacity-95"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </Modal>
    );
}
