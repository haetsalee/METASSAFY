package com.ssafy.metassafy.service.file;

import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;
import com.ssafy.metassafy.dto.file.FileDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.*;
import java.util.StringTokenizer;
import java.util.UUID;
import java.util.Optional;

@Service
public class FileServiceImpl implements FileService{

    @Value("${naver.cloud.endpoint}")
    private String endPoint;
    @Value("${naver.cloud.region.name}")
    private String regionName;
    @Value("${naver.cloud.bucket.name}")
    private String bucketName;
    @Value("${naver.cloud.access.key}")
    private String accessKey;
    @Value("${naver.cloud.secret.key}")
    private String secretKey;
    private AmazonS3 s3;

    @PostConstruct
    public void initialize(){
        s3 = AmazonS3ClientBuilder.standard()
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
                .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
                .build();
    }

    @Override
    public FileDto saveFile(MultipartFile multipartFile) throws IOException{

        FileDto fileDto = new FileDto();

        // 원래 파일 이름 추출
        String origin_name = multipartFile.getOriginalFilename();

        // 파일 이름으로 쓸 uuid 생성
        String uuid = UUID.randomUUID().toString();

        // uuid와 확장자 결합
        String saved_name = uuid + origin_name;
        File uploadFile = convert(multipartFile)        // 파일 생성
                .orElseThrow(() -> new IllegalArgumentException("MultipartFile -> File convert fail"));

        upload(bucketName,saved_name,uploadFile);
        // 파일 업로드 & 링크 받아오기

        fileDto.setOrigin_name(origin_name);
        fileDto.setSaved_name(saved_name);
        fileDto.setPath(endPoint +"/"+ bucketName +"/"+ saved_name);

        return fileDto;
    }

    @Override
    public int downloadFile(FileDto fileDto) throws IOException{

        System.out.println(fileDto);

        try {
            S3Object s3Object = s3.getObject(bucketName, fileDto.getSaved_name());
            S3ObjectInputStream s3ObjectInputStream = s3Object.getObjectContent();

            OutputStream outputStream = new BufferedOutputStream(new FileOutputStream("C:/"+fileDto.getOrigin_name()));
            byte[] bytesArray = new byte[4096];
            int bytesRead = -1;
            while ((bytesRead = s3ObjectInputStream.read(bytesArray)) != -1) {
                outputStream.write(bytesArray, 0, bytesRead);
            }

            outputStream.close();
            s3ObjectInputStream.close();

            System.out.format("Object %s has been downloaded.\n", fileDto.getOrigin_name());
            return 1;
        } catch (AmazonS3Exception e) {
            e.printStackTrace();
            return 0;
        } catch(SdkClientException e) {
            e.printStackTrace();
            return 0;
        }
    }

    @Override
    public void deleteFile(FileDto fileDto) throws IOException {

    }

    private void mkdir(String bucketName, String folderName) {
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(0L);
        objectMetadata.setContentType("application/x-directory");
        PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, folderName, new ByteArrayInputStream(new byte[0]), objectMetadata);

        try {
            s3.putObject(putObjectRequest);
            System.out.format("Folder %s has been created.\n", folderName);
        } catch (AmazonS3Exception e) {
            e.printStackTrace();
        } catch(SdkClientException e) {
            e.printStackTrace();
        }
    }

    private void upload(String bucketName, String fileName, File uploadFile) {
        s3.putObject(new PutObjectRequest(bucketName, fileName, uploadFile)
                .withCannedAcl(CannedAccessControlList.PublicRead));
        uploadFile.delete();
    }

    private void download(String bucketName, String fileName, String downloadFilePath) throws Exception{
        try {
            S3Object s3Object = s3.getObject(bucketName, fileName);
            S3ObjectInputStream s3ObjectInputStream = s3Object.getObjectContent();

            OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(downloadFilePath));
            byte[] bytesArray = new byte[4096];
            int bytesRead = -1;
            while ((bytesRead = s3ObjectInputStream.read(bytesArray)) != -1) {
                outputStream.write(bytesArray, 0, bytesRead);
            }

            outputStream.close();
            s3ObjectInputStream.close();
            System.out.format("Object %s has been downloaded.\n", fileName);
        } catch (AmazonS3Exception e) {
            e.printStackTrace();
        } catch(SdkClientException e) {
            e.printStackTrace();
        }
    }

    private Optional<File> convert(MultipartFile file) throws IOException {
        File convertFile = new File(file.getOriginalFilename());
        if (convertFile.createNewFile()) {
            try (FileOutputStream fos = new FileOutputStream(convertFile)) {
                fos.write(file.getBytes());
            }
            return Optional.of(convertFile);
        }

        return Optional.empty();
    }
}
