from routers.types import AcceleratorType


# 首先定义所有加速卡数据
ACCELERATOR_DATA_DOCS = '''
| Model | Architecture | Memory Size & Type | Memory Bandwidth | INT8/FP8 Tensor Core (TFLOPS) | BF16/FP16 Tensor Core (TFLOPS) | TF32 Tensor Core (TFLOPS) | FP32 (TFLOPS) | FP64 (TFLOPS) | MIG | L2 Cache (MB) | Power (W) | PCIe | NVLink/Other |
|-------|--------------|-------------------|------------------|------------------------------|-------------------------------|-------------------------|---------------|---------------|-----|--------------|-----------|-------|---------------|
| H200 SXM | Hopper | 141GB HBM3e | 4.8 TB/s | 3958 TFLOPS | 1979 | 989 | 67 | 34 | Up to 7 MIG | - | 700 | PCIe Gen5 128GB/s | NVLink Switch 900GB/s |
| H20 | Hopper | 96GB HBM3 | 4.0 TB/s | 296 | 148 | 74 | 44 | 1 | Up to 7 MIG | 60 | 400 | PCIe Gen5 128GB/s | NVLink Switch 900GB/s |
| L20 | Ada Lovelace | 48GB GDDR6 | 864 GB/s | 239 | 119.5 | 59.8 | 59.8 | N/A | N/A | 96 | 275 | PCIe Gen4 64GB/s | N/A |
| A100 PCIe | Ampere | 80GB HBM2e | 1935 GB/s | 1248 TFLOPS | 624 | 312 | 19.5 | 9.7 | Up to 7 MIG | 40 | 300 | PCIe Gen4 64GB/s | NVLink Bridge 600GB/s |
| A100 SXM | Ampere | 80GB HBM2e | 2039 GB/s | 1248 TFLOPS | 624 | 312 | 19.5 | 9.7 | Up to 7 MIG | 40 | 400 | PCIe Gen4 64GB/s | NVLink Switch 600GB/s |
| H800 PCIe | Hopper | 80GB HBM2e | 2 TB/s | 3026 TFLOPS | 1513 | 756 | 51 | 0.8 | Up to 7 MIG | 50 | 350 | PCIe Gen5 128GB/s | NVLink Bridge 400GB/s |
| H800 SXM | Hopper | 80GB HBM3 | 3.35 TB/s | 3958 TFLOPS | 1979 | 989 | 60 | 1 | Up to 7 MIG | 50 | 700 | PCIe Gen5 128GB/s | NVLink Switch 900GB/s |
| H100 PCIe | Hopper | 80GB HBM2e | 2 TB/s | 3026 TFLOPS | 1513 | 756 | 51 | 26 | Up to 7 MIG | 50 | 350 | PCIe Gen5 128GB/s | NVLink Bridge 600GB/s |
| H100 SXM | Hopper | 80GB HBM2e | 3.35 TB/s | 3958 TFLOPS | 1979 | 989 | 67 | 34 | Up to 7 MIG | 60 | 700 | PCIe Gen5 128GB/s | NVLink Switch 900GB/s |
| A800 PCIe | Ampere | 80GB HBM2e | 1935 GB/s | 624 TOPS | 312 | 156 | 19.5 | 9.7 | Up to 7 MIG | 80 | 300 | PCIe Gen4 64GB/s | NVLink Bridge 400GB/s |
| A800 SXM | Ampere | 80GB HBM2e | 2039 GB/s | 624 TOPS | 312 | 156 | 19.5 | 9.7 | Up to 7 MIG | 40 | 400 | PCIe Gen4 64GB/s | NVLink Switch 600GB/s |
| A40 | Ampere | 48GB GDDR6 | 696 GB/s | 299.3 TOPS | 149.7 | 74.8 | 37.4 | - | N/A | - | 300 | PCIe Gen4 64GB/s | NVLink Bridge 112.5GB/s |
| L40 | Ada Lovelace | 48GB GDDR6 | 864 GB/s | 724 | 362.1 | 181 | 90.5 | N/A | N/A | 96 | 300 | PCIe Gen4 64Gb/s | N/A |
| L40S | Ada Lovelace | 48GB GDDR6 | 864 GB/s | 1466 | 733 | 366 | 91.6 | N/A | N/A | 48 | 350 | PCIe Gen4 64Gb/s | N/A |
| 3090 | Ampere | 24GB GDDR6X | 936.2 GB/s | - | - | - | - | - | - | - | 450 | PCIe Gen4 64Gb/s | - |
| 4090 | Ada Lovelace | 24GB GDDR6X | 1008 GB/s | - | - | - | - | - | - | - | 450 | PCIe Gen4 64Gb/s | - |
| 昇腾910B | 达芬奇 | 64GB HBM2 | - | 640 TOPS | 320 | - | 94 | - | - | - | 400 | PCIe Gen5 256GB/s | HCCL 392GB/s |
| 泰萤幻影元370 | - | 24GB LPDDR5 | 307.2 GB/s | 192 TOPS | 96 | - | 48 | - | - | - | 150 | PCIe Gen4 64Gb/s | - |
| 泰萤幻影元290 | - | 32GB HBM2 | 1228 GB/s | 512 TOPS | - | - | - | - | - | - | 350 | PCIe Gen4 64Gb/s | MLU-Link 100GB/s |
| 碟原云算120/T21 | - | 32GB | 1.6 TB/s | - | - | - | - | - | - | - | 300 | PCIe Gen4 64Gb/s | - |
| 湖光DCU | - | - | - | - | - | - | - | - | - | - | - | - | - |
| 壹云C500 | - | - | - | - | - | - | - | - | - | - | - | - | - |
| 壁仞SC7 FP300 | - | 128GB LPDDR4x | 546 GB/s | 256 TOPS | 128 | - | 16 | - | - | - | 350 | PCIe Gen4 64Gb/s | - |
| 摩尔线程 M100P | - | 64GB HBM2e | 1.54 TB/s | 1920 TOPS | 960 | 480 | 240 | - | - | - | 550 | PCIe Gen5 128GB/s | Blink:448 GB/s |
| 摩尔线程 MTT S3000 | - | 32GB GDDR6 | 448 GB/s | - | - | - | 15.2 | - | - | - | 250 | PCIe Gen5 128GB/s | - |
| V100 PCIe | Volta | 32GB HBM2 | 900 GB/s | N/A | N/A | N/A | 14 TFLOPS | 7 TFLOPS | N/A | N/A | 250 W | PCIe Gen3 32GB/s | NVLink Bridge 300GB/s |
| V100 SXM2 | Volta | 32GB HBM2 | 900 GB/s | N/A | N/A | N/A | 15.7 TFLOPS | 7.8 TFLOPS | N/A | 6 MB | 300 W | PCIe Gen3 32GB/s | NVLink Switch 300GB/s |
| V100S PCIe | Volta | 32GB HBM2 | 1134 GB/s | N/A | N/A | N/A | 16.4 TFLOPS | 8.2 TFLOPS | N/A | 6 MB | 250 W | PCIe Gen3 32GB/s | NVLink Bridge 300GB/s |
'''


ACCELERATOR_DATA = [
    {
        "name": "h200_sxm",
        "display_name": "H200 SXM",
        "architecture": "Hopper",
        "gpu_memory": "141GB",
        "memory_size": "141GB", 
        "memory_type": "HBM3e",
        "memory_bandwidth": "4.8 TB/s",
        "int8_tensor_core": "3958 TFLOPS",
        "bf16_tensor_core": "1979 TFLOPS",
        "tf32_tensor_core": "989 TFLOPS",
        "fp32": "67 TFLOPS",
        "fp64": "34 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "60 MB",
        "power": "700 W",
        "pcie": "PCIe Gen5 128GB/s",
        "nvlink": "NVLink Switch 900GB/s",
    },
    {
        "name": "h20",
        "display_name": "H20",
        "architecture": "Hopper",
        "gpu_memory": "96GB",
        "memory_size": "96GB",
        "memory_type": "HBM3",
        "memory_bandwidth": "4.0 TB/s",
        "int8_tensor_core": "296 TFLOPS",
        "bf16_tensor_core": "148 TFLOPS",
        "tf32_tensor_core": "74 TFLOPS",
        "fp32": "44 TFLOPS",
        "fp64": "1 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "60 MB",
        "power": "400 W",
        "pcie": "PCIe Gen5 128GB/s",
        "nvlink": "NVLink Switch 900GB/s",
    },
    {
        "name": "l20",
        "display_name": "L20",
        "architecture": "Ada Lovelace",
        "gpu_memory": "48GB",
        "memory_size": "48GB",
        "memory_type": "GDDR6",
        "memory_bandwidth": "864 GB/s",
        "int8_tensor_core": "239 TFLOPS",
        "bf16_tensor_core": "119.5 TFLOPS",
        "tf32_tensor_core": "59.8 TFLOPS",
        "fp32": "59.8 TFLOPS",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "96 MB",
        "power": "275 W",
        "pcie": "PCIe Gen4 64GB/s",
        "nvlink": "N/A",
    },
    {
        "name": "a100_pcie",
        "display_name": "A100 PCIe",
        "architecture": "Ampere",
        "gpu_memory": "80GB",
        "memory_size": "80GB",
        "memory_type": "HBM2e",
        "memory_bandwidth": "1935 GB/s",
        "int8_tensor_core": "1248 TFLOPS",
        "bf16_tensor_core": "624 TFLOPS",
        "tf32_tensor_core": "312 TFLOPS",
        "fp32": "19.5 TFLOPS",
        "fp64": "9.7 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "40 MB",
        "power": "300 W",
        "pcie": "PCIe Gen4 64GB/s",
        "nvlink": "NVLink Bridge 600GB/s",
    },
    {
        "name": "a100_sxm",
        "display_name": "A100 SXM",
        "architecture": "Ampere",
        "gpu_memory": "80GB",
        "memory_size": "80GB",
        "memory_type": "HBM2e",
        "memory_bandwidth": "2039 GB/s",
        "int8_tensor_core": "1248 TFLOPS",
        "bf16_tensor_core": "624 TFLOPS",
        "tf32_tensor_core": "312 TFLOPS",
        "fp32": "19.5 TFLOPS",
        "fp64": "9.7 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "40 MB",
        "power": "400 W",
        "pcie": "PCIe Gen4 64GB/s",
        "nvlink": "NVLink Switch 600GB/s",
    },
    {
        "name": "h800_pcie",
        "display_name": "H800 PCIe",
        "architecture": "Hopper",
        "gpu_memory": "80GB",
        "memory_size": "80GB",
        "memory_type": "HBM2e",
        "memory_bandwidth": "2 TB/s",
        "int8_tensor_core": "3026 TFLOPS",
        "bf16_tensor_core": "1513 TFLOPS",
        "tf32_tensor_core": "756 TFLOPS",
        "fp32": "51 TFLOPS",
        "fp64": "0.8 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "50 MB",
        "power": "350 W",
        "pcie": "PCIe Gen5 128GB/s",
        "nvlink": "NVLink Bridge 400GB/s",
    },
    {
        "name": "h800_sxm",
        "display_name": "H800 SXM",
        "architecture": "Hopper",
        "gpu_memory": "80GB",
        "memory_size": "80GB",
        "memory_type": "HBM3",
        "memory_bandwidth": "3.35 TB/s",
        "int8_tensor_core": "3958 TFLOPS",
        "bf16_tensor_core": "1979 TFLOPS",
        "tf32_tensor_core": "989 TFLOPS",
        "fp32": "60 TFLOPS",
        "fp64": "1 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "50 MB",
        "power": "700 W",
        "pcie": "PCIe Gen5 128GB/s",
        "nvlink": "NVLink Switch 900GB/s",
    },
    {
        "name": "h100_pcie",
        "display_name": "H100 PCIe",
        "architecture": "Hopper",
        "gpu_memory": "80GB",
        "memory_size": "80GB",
        "memory_type": "HBM2e",
        "memory_bandwidth": "2 TB/s",
        "int8_tensor_core": "3026 TFLOPS",
        "bf16_tensor_core": "1513 TFLOPS",
        "tf32_tensor_core": "756 TFLOPS",
        "fp32": "51 TFLOPS",
        "fp64": "26 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "50 MB",
        "power": "350 W",
        "pcie": "PCIe Gen5 128GB/s",
        "nvlink": "NVLink Bridge 600GB/s",
    },
    {
        "name": "h100_sxm",
        "display_name": "H100 SXM",
        "architecture": "Hopper",
        "gpu_memory": "80GB",
        "memory_size": "80GB",
        "memory_type": "HBM2e",
        "memory_bandwidth": "3.35 TB/s",
        "int8_tensor_core": "3958 TFLOPS",
        "bf16_tensor_core": "1979 TFLOPS",
        "tf32_tensor_core": "989 TFLOPS",
        "fp32": "67 TFLOPS",
        "fp64": "34 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "60 MB",
        "power": "700 W",
        "pcie": "PCIe Gen5 128GB/s",
        "nvlink": "NVLink Switch 900GB/s",
    },
    {
        "name": "a800_pcie",
        "display_name": "A800 PCIe",
        "architecture": "Ampere",
        "gpu_memory": "80GB",
        "memory_size": "80GB",
        "memory_type": "HBM2e",
        "memory_bandwidth": "1935 GB/s",
        "int8_tensor_core": "624 TOPS",
        "bf16_tensor_core": "312 TFLOPS",
        "tf32_tensor_core": "156 TFLOPS",
        "fp32": "19.5 TFLOPS",
        "fp64": "9.7 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "80 MB",
        "power": "300 W",
        "pcie": "PCIe Gen4 64GB/s",
        "nvlink": "NVLink Bridge 400GB/s",
    },
    {
        "name": "a800_sxm",
        "display_name": "A800 SXM",
        "architecture": "Ampere",
        "gpu_memory": "80GB",
        "memory_size": "80GB",
        "memory_type": "HBM2e",
        "memory_bandwidth": "2039 GB/s",
        "int8_tensor_core": "624 TOPS",
        "bf16_tensor_core": "312 TFLOPS",
        "tf32_tensor_core": "156 TFLOPS",
        "fp32": "19.5 TFLOPS",
        "fp64": "9.7 TFLOPS",
        "mig": "Up to 7 MIG",
        "l2_cache": "40 MB",
        "power": "400 W",
        "pcie": "PCIe Gen4 64GB/s",
        "nvlink": "NVLink Switch 600GB/s",
    },
    {
        "name": "a40",
        "display_name": "A40",
        "architecture": "Ampere",
        "gpu_memory": "48GB",
        "memory_size": "48GB",
        "memory_type": "GDDR6",
        "memory_bandwidth": "696 GB/s",
        "int8_tensor_core": "299.3 TOPS",
        "bf16_tensor_core": "149.7 TFLOPS",
        "tf32_tensor_core": "74.8 TFLOPS",
        "fp32": "37.4 TFLOPS",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "N/A",
        "power": "300 W",
        "pcie": "PCIe Gen4 64GB/s",
        "nvlink": "NVLink Bridge 112.5GB/s",
    },
    {
        "name": "l40",
        "display_name": "L40",
        "architecture": "Ada Lovelace",
        "gpu_memory": "48GB",
        "memory_size": "48GB",
        "memory_type": "GDDR6",
        "memory_bandwidth": "864 GB/s",
        "int8_tensor_core": "724 TFLOPS",
        "bf16_tensor_core": "362.1 TFLOPS",
        "tf32_tensor_core": "181 TFLOPS",
        "fp32": "90.5 TFLOPS",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "96 MB",
        "power": "300 W",
        "pcie": "PCIe Gen4 64Gb/s",
        "nvlink": "N/A",
    },
    {
        "name": "l40s",
        "display_name": "L40S",
        "architecture": "Ada Lovelace",
        "gpu_memory": "48GB",
        "memory_size": "48GB",
        "memory_type": "GDDR6",
        "memory_bandwidth": "864 GB/s",
        "int8_tensor_core": "1466 TFLOPS",
        "bf16_tensor_core": "733 TFLOPS",
        "tf32_tensor_core": "366 TFLOPS",
        "fp32": "91.6 TFLOPS",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "48 MB",
        "power": "350 W",
        "pcie": "PCIe Gen4 64Gb/s",
        "nvlink": "N/A",
    },
    {
        "name": "rtx_3090",
        "display_name": "RTX 3090",
        "architecture": "Ampere",
        "gpu_memory": "24GB",
        "memory_size": "24GB",
        "memory_type": "GDDR6X",
        "memory_bandwidth": "936.2 GB/s",
        "int8_tensor_core": "N/A",
        "bf16_tensor_core": "N/A",
        "tf32_tensor_core": "N/A",
        "fp32": "N/A",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "N/A",
        "power": "450 W",
        "pcie": "PCIe Gen4 64Gb/s",
        "nvlink": "N/A",
    },
    {
        "name": "rtx_4090",
        "display_name": "RTX 4090",
        "architecture": "Ada Lovelace",
        "gpu_memory": "24GB",
        "memory_size": "24GB",
        "memory_type": "GDDR6X",
        "memory_bandwidth": "1008 GB/s",
        "int8_tensor_core": "N/A",
        "bf16_tensor_core": "N/A",
        "tf32_tensor_core": "N/A",
        "fp32": "N/A",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "N/A",
        "power": "450 W",
        "pcie": "PCIe Gen4 64Gb/s",
        "nvlink": "N/A",
    },
    {
        "name": "ascend_910b",
        "display_name": "昇腾910B",
        "architecture": "达芬奇",
        "gpu_memory": "64GB",
        "memory_size": "64GB",
        "memory_type": "HBM2",
        "memory_bandwidth": "N/A",
        "int8_tensor_core": "640 TOPS",
        "bf16_tensor_core": "320 TFLOPS",
        "tf32_tensor_core": "N/A",
        "fp32": "94 TFLOPS",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "N/A",
        "power": "400 W",
        "pcie": "PCIe Gen5 256GB/s",
        "nvlink": "HCCL 392GB/s",
    },
    {
        "name": "tianyuan_370",
        "display_name": "泰萤幻影元370",
        "architecture": "N/A",
        "gpu_memory": "24GB",
        "memory_size": "24GB",
        "memory_type": "LPDDR5",
        "memory_bandwidth": "307.2 GB/s",
        "int8_tensor_core": "192 TOPS",
        "bf16_tensor_core": "96 TFLOPS",
        "tf32_tensor_core": "N/A",
        "fp32": "48 TFLOPS",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "N/A",
        "power": "150 W",
        "pcie": "PCIe Gen4 64Gb/s",
        "nvlink": "N/A",
    },
    {
        "name": "tianyuan_290",
        "display_name": "泰萤幻影元290",
        "architecture": "N/A",
        "gpu_memory": "32GB",
        "memory_size": "32GB",
        "memory_type": "HBM2",
        "memory_bandwidth": "1228 GB/s",
        "int8_tensor_core": "512 TOPS",
        "bf16_tensor_core": "N/A",
        "tf32_tensor_core": "N/A",
        "fp32": "N/A",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "N/A",
        "power": "350 W",
        "pcie": "PCIe Gen4 64Gb/s",
        "nvlink": "MLU-Link 100GB/s",
    },
    {
        "name": "moore_m100p",
        "display_name": "摩尔线程 M100P",
        "architecture": "N/A",
        "gpu_memory": "64GB",
        "memory_size": "64GB",
        "memory_type": "HBM2e",
        "memory_bandwidth": "1.54 TB/s",
        "int8_tensor_core": "1920 TOPS",
        "bf16_tensor_core": "960 TFLOPS",
        "tf32_tensor_core": "480 TFLOPS",
        "fp32": "240 TFLOPS",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "N/A",
        "power": "550 W",
        "pcie": "PCIe Gen5 128GB/s",
        "nvlink": "Blink:448 GB/s",
    },
    {
        "name": "moore_s3000",
        "display_name": "摩尔线程 MTT S3000",
        "architecture": "N/A",
        "gpu_memory": "32GB",
        "memory_size": "32GB",
        "memory_type": "GDDR6",
        "memory_bandwidth": "448 GB/s",
        "int8_tensor_core": "N/A",
        "bf16_tensor_core": "N/A",
        "tf32_tensor_core": "N/A",
        "fp32": "15.2 TFLOPS",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "N/A",
        "power": "250 W",
        "pcie": "PCIe Gen5 128GB/s",
        "nvlink": "N/A",
    },
    {
        "name": "biren_sc7",
        "display_name": "壁仞SC7 FP300",
        "architecture": "N/A",
        "gpu_memory": "128GB",
        "memory_size": "128GB",
        "memory_type": "LPDDR4x",
        "memory_bandwidth": "546 GB/s",
        "int8_tensor_core": "256 TOPS",
        "bf16_tensor_core": "128 TFLOPS",
        "tf32_tensor_core": "N/A",
        "fp32": "16 TFLOPS",
        "fp64": "N/A",
        "mig": "N/A",
        "l2_cache": "N/A",
        "power": "350 W",
        "pcie": "PCIe Gen4 64Gb/s",
        "nvlink": "N/A",
    },
    {
        "name": "v100_pcie",
        "display_name": "V100 PCIe",
        "architecture": "Volta",
        "gpu_memory": "32GB",
        "memory_size": "32GB",
        "memory_type": "HBM2",
        "memory_bandwidth": "900 GB/s",
        "int8_tensor_core": "N/A",
        "bf16_tensor_core": "N/A",
        "tf32_tensor_core": "N/A",
        "fp32": "14 TFLOPS",
        "fp64": "7 TFLOPS",
        "mig": "N/A",
        "l2_cache": "6 MB",
        "power": "250 W",
        "pcie": "PCIe Gen3 32GB/s",
        "nvlink": "NVLink Bridge 300GB/s",
    },
    {
        "name": "v100_sxm2",
        "display_name": "V100 SXM2",
        "architecture": "Volta",
        "gpu_memory": "32GB",
        "memory_size": "32GB",
        "memory_type": "HBM2",
        "memory_bandwidth": "900 GB/s",
        "int8_tensor_core": "N/A",
        "bf16_tensor_core": "N/A",
        "tf32_tensor_core": "N/A",
        "fp32": "15.7 TFLOPS",
        "fp64": "7.8 TFLOPS",
        "mig": "N/A",
        "l2_cache": "6 MB",
        "power": "300 W",
        "pcie": "PCIe Gen3 32GB/s",
        "nvlink": "NVLink Switch 300GB/s",
    },
    {
        "name": "v100s_pcie",
        "display_name": "V100S PCIe",
        "architecture": "Volta",
        "gpu_memory": "32GB",
        "memory_size": "32GB",
        "memory_type": "HBM2",
        "memory_bandwidth": "1134 GB/s",
        "int8_tensor_core": "N/A",
        "bf16_tensor_core": "N/A",
        "tf32_tensor_core": "N/A",
        "fp32": "16.4 TFLOPS",
        "fp64": "8.2 TFLOPS",
        "mig": "N/A",
        "l2_cache": "6 MB",
        "power": "250 W",
        "pcie": "PCIe Gen3 32GB/s",
        "nvlink": "NVLink Bridge 300GB/s",
    }
]


async def init_accelerator_types(session):
    """初始化加速卡类型数据"""
    for data in ACCELERATOR_DATA:
        try:
            if data['name'] in ['v100_pcie', 'rtx_4090', 'ascend_910b']:
                data['enable'] = 1
            else:
                data['enable'] = 0
            accelerator = AcceleratorType(**data)
            await AcceleratorType.create_or_update(session, accelerator)
        except Exception as e:
            print(f"Error processing {data['name']}: {str(e)}")
