import { useToast } from "@chakra-ui/react"


export default function DefaultToast (props){
    const toast = useToast()
    const statuses = ['success', 'error', 'warning', 'info']
    

    return(
        toast({
            title : `Видалено`,
            isClosable : true,
        })
    )
}